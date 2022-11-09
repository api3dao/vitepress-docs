var textVersion = require('textversionjs');
const yaml = require('js-yaml');
const fs = require('fs');
var file = require('file');
const fse = require('fs-extra');
const { Index } = require('flexsearch');

let filesArr = [];
let cnt = 1; // Used for the index id
let index = new Index({
  tokenize: 'full',
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
  Build the content json files used to create FlexSearch indexes.
  Get the innerText from the html and create a 
  content page for the html page in /libs/flexSearchFiles
*/
function buildContentFile(path) {
  const contentDir = 'indexes/content-files';

  // Make sure the /flexContentFiles dir exists
  fse.ensureDirSync(contentDir);

  const arr = path.split('/');

  // contentPath: the file with extracted HTML text
  let parsedPath = path.split('/.vitepress/dist')[1];
  let contentPath = contentDir + parsedPath.replace('.html', '.json');

  // frontmatter and url: /explore
  //console.log('\n> path:', path);
  const pathMarkdown =
    'docs/' + path.split('docs/.vitepress/dist/')[1].replace('.html', '.md');
  let frontmatter = yaml.load(
    fs.readFileSync(pathMarkdown, 'utf8').split('---')[1]
  );
  //let url = path.split('docs/.vitepress/dist')[1];

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

  // Updates the lookup file so search can find the page by its ID
  addToFrontmatter(cnt, frontmatter);

  // Create the json object and write file to search-files dir
  let json = {
    id: cnt,
    content: plainText,
  };
  fse.outputFileSync(contentPath, JSON.stringify(json));

  // Update the in memory flexSearch index to be exported later
  index.add(cnt, json.content);
  cnt++;
}

/*
  Updates the frontmatterIds file so search can find the page by its ID
*/
let frontmatterObj = {};
function addToFrontmatter(id, frontmatter) {
  frontmatterObj[id] = frontmatter;
}

/*
  Export all flex indexes to disk /.vitepress/flex-all-indexes
  Then split the map.json file
*/
function exportAllIndexesToFiles() {
  index.export((key, data) => {
    let dir = 'indexes/all';
    // if (key === 'map') dir = 'docs/.vitepress/flex-all-indexes/map';
    // console.log(`${dir}/${key}.json`);
    fse.writeFileSync(`${dir}/${key}.json`, data !== undefined ? data : '');
  });
}

/*
  Load all HTML files from /docs/.vitepress/dist 
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
        buildContentFile(dir + '/' + files[x]);
      }
    }
  }
}

console.log('\n----- Building FlexSearch Indexes -----');
fse.ensureDirSync('indexes/all');

console.log('> Creating content pages in /indexes/content-files/');
start();

console.log('> Creating index files in /indexes/ (async operation *)');
exportAllIndexesToFiles();

console.log('> Creating frontmatterIds file in /.vitepress/');
fs.writeFileSync(
  'docs/.vitepress/frontmatterIds.json',
  JSON.stringify(frontmatterObj)
);
