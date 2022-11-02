var textVersion = require('textversionjs');
const fs = require('fs');
var file = require('file');
const fse = require('fs-extra');
const { Document } = require('flexsearch');

let filesArr = [];
let cnt = 1; // Used for the index id
let index = new Document({
  document: {
    id: 'id',
    index: ['content', 'docSet', 'indexPath', 'url'],
  },
});

/**
 * Callback for file.walkSync, add each
 * @param {*} dirPath
 * @param {*} dirs
 * @param {*} files
 */
function walkCB(dirPath, dirs, files) {
  filesArr.push({ dir: dirPath, files: files });
}

/*
  Build the content json files used to create FlexSearch indexes
*/
function buildFileJson(path) {
  const arr = path.split('/');

  // indexPath
  let indexPath = path.split('/.vitepress/dist')[1];
  indexPath =
    'docs/.vitepress/search-files' + indexPath.replace('.html', '.json');

  // docSet
  let docSet;
  if (path.indexOf('/dist/reference') != -1) {
    docSet = '/' + arr[3] + '/' + arr[4] + '/' + arr[5] + '/';
  }
  // Will then be guiders or explore
  else {
    docSet = '/' + arr[3] + '/';
  }
  let url = path.split('docs/.vitepress/dist')[1];

  // Get the html files and extract the text from the html
  const htmlString = fs.readFileSync(path, 'utf8');
  var plainText = textVersion(htmlString);

  // Remove the nav and side bar stuff
  plainText = plainText.split('Table of Contents for current page')[1];

  // Remove footer below next/previous pages
  plainText = plainText.split('Released under the MIT License.')[0];

  // Remove excessive ==== and -----
  plainText = plainText.replace(/=====/g, '');
  plainText = plainText.replace(/-----/g, '');

  // Remove line feeds
  plainText = plainText.replace(/\n/g, ' ');

  // Output plainText for verification
  // console.log('\n>>>');
  // console.log(plainText);

  // Create the json object and write file to search-files dir
  let json = {
    id: cnt,
    distPath: path,
    indexPath: indexPath,
    docSet: docSet,
    url: url,
    content: plainText,
  };
  fse.outputFileSync(indexPath, JSON.stringify(json));

  // Update the in memory flexSearch index
  index.add({
    id: cnt,
    indexPath: json.indexPath,
    docSet: json.docSet,
    url: json.url,
    content: json.content,
  });
  cnt++;

  // Export flexSearch index to disk
  index.export((key, data) =>
    fs.writeFileSync(
      `docs/.vitepress/search-latest-index/${key}.json`,
      data !== undefined ? data : ''
    )
  );
}

/*
  Load all HTML files from /docs/.vitepress/dist dir
*/
function start() {
  file.walkSync('./docs/.vitepress/dist', walkCB);
  const skip = [
    './docs/.vitepress/dist/index.html',
    './docs/.vitepress/dist/team.html',
    './docs/.vitepress/dist/404.html',
  ];
  for (let i = 0; i < filesArr.length; i++) {
    const dir = filesArr[i].dir;
    const files = filesArr[i].files;
    // Each file in the dir json object
    for (let x = 0; x < files.length; x++) {
      if (
        files[x].indexOf('.html') > -1 &&
        !skip.includes(dir + '/' + files[x]) &&
        dir.indexOf('/dist/dev') === -1
      ) {
        //console.log(dir + '/' + files[x]);
        buildFileJson(dir + '/' + files[x]);
      }
    }
  }
}

console.log('Building FlexSearch Indexes');
start();
