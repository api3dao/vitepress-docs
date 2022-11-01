var textVersion = require('textversionjs');
const { readFileSync, writeFileSync } = require('fs');
var file = require('file');
const { Document } = require('flexsearch');
const fse = require('fs-extra');
let filesArr = [];

//const path = 'docs/.vitepress/dist/guides/airnode/quick-start-aws/index.html';
//const path = 'docs/.vitepress/dist/reference/airnode/latest/index.html';

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
  Load all HTML files from /dist dir
*/
function loadHtmlFiles() {
  file.walkSync('./docs/.vitepress/dist', walkCB);
  console.log('----- END WALK SYNC -----');
  const skip = [
    './docs/.vitepress/dist/index.html',
    './docs/.vitepress/dist/team.html',
    './docs/.vitepress/dist/404.html',
  ];
  for (let i = 0; i < filesArr.length; i++) {
    //extractContent(arr[i]);
    //console.log(filesArr[i]);
    const dir = filesArr[i].dir;
    const files = filesArr[i].files;
    // Each file in the json object
    for (let x = 0; x < files.length; x++) {
      if (
        files[x].indexOf('.html') > -1 &&
        !skip.includes(dir + '/' + files[x]) &&
        dir.indexOf('/dist/dev') === -1
      ) {
        console.log(dir + '/' + files[x]);
        buildFileJson(dir + '/' + files[x]);
      }
    }
  }
}

function buildFileJson(path) {
  const arr = path.split('/');

  // indexPath
  let indexPath = path.split('/.vitepress/dist')[1];
  indexPath =
    'docs/.vitepress/search-files' + indexPath.replace('.html', '.json');
  console.log('ip', indexPath);

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
  //console.log(indexPath, docSet, url);

  /*
    Get the html files and extract the text from the html
  */
  const htmlString = readFileSync(path, 'utf8');
  var plainText = textVersion(htmlString);
  plainText = plainText.replace(/\n/g, ' ');

  // Create the json object and write file to search-files dir
  let json = {
    id: 0,
    distPath: path,
    indexPath: indexPath,
    docSet: docSet,
    url: url,
    content: plainText,
  };
  fse.outputFileSync(indexPath, JSON.stringify(json));
}

/*
  FlexSearch: Build index
*/
function buildIndex() {
  const content = JSON.parse(
    readFileSync('docs/.vitepress/search-files/' + indexPath, 'utf8')
  );
  const index = new Document({
    document: {
      id: 'id',
      index: ['content', 'docSet'],
    },
  });
  index.add({
    id: 0,
    distPath: path,
    indexPath: indexPath,
    docSet: docSet,
    content: plainText,
  });
  //console.log(index);
}

/*
  FlexSearch: search index
*/
function search() {
  let ids = index.search({
    query: 'Looking at the config.json ',
    index: ['content'],
    limit: 100,
    //suggest: true,
    //bool: 'or',
  });
  console.log('ids', ids);
}

loadHtmlFiles();
