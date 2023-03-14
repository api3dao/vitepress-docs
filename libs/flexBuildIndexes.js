/**
 * See /dev/flexsearch.md
 */

var textVersion = require('textversionjs');
const yaml = require('js-yaml');
const fs = require('fs');
var file = require('file');
const fse = require('fs-extra');
const { Index } = require('flexsearch');

let filesArr = [];
let id = 1; // Used as the id for each page added to the index
let indexAll = new Index({
  tokenize: 'full',
});
let indexLatest = new Index({
  tokenize: 'full',
});
// The latest docsets
let latestDocsets = [
  '/dist/explore/introduction/',
  '/dist/explore/dapis/',
  '/dist/guides/dapis/',
  //'/dist/reference/qrng/',
  //'/dist/reference/dao-members/',
  '/dist/reference/dapis/',
  //'/dist/reference/airnode/latest/',
  //'/dist/reference/ois/latest/',
];

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

  // contentPath: the file with extracted HTML text
  let parsedPath = path.split('/.vitepress/dist')[1];
  let contentPath = contentDir + parsedPath.replace('.html', '.json');

  // frontmatter and url: /explore
  const pathMarkdown =
    'docs/' + path.split('docs/.vitepress/dist/')[1].replace('.html', '.md');
  let frontmatter = yaml.load(
    fs.readFileSync(pathMarkdown, 'utf8').split('---')[1]
  );

  // Get the html files and extract the text from the html
  const htmlString = fs.readFileSync(path, 'utf8');
  var plainText = textVersion(htmlString);

  // Remove the nav and side bar stuff
  plainText = plainText.split('Table of Contents for current page')[1];

  // Remove footer below next/previous pages
  plainText = plainText.split('[Previous page')[0];

  // Remove excessive ==== and -----
  plainText = plainText.replace(/=====/g, '');
  plainText = plainText.replace(/-----/g, '');

  // Remove line feeds
  plainText = plainText.replace(/\n/g, ' ');

  // Updates the lookup file so search can find the page by its ID
  addToFrontmatter(id, frontmatter);

  // Create the json object and write file to search-files dir
  let json = {
    id: id,
    content: plainText,
  };
  fse.outputFileSync(contentPath, JSON.stringify(json));

  // Update the in memory flexSearch indexes to be exported later
  // All files (from all docsets) go into indexAll
  indexAll.add(id, json.content);
  // Only add path within the latest docsets
  latestDocsets.forEach((element) => {
    if (path.indexOf(element) > -1) {
      //console.log(path);
      indexLatest.add(id, json.content);
    }
  });

  id++;
}

/*
  Updates the frontmatterIds file so search can find the page by its ID
*/
let frontmatterObj = {};
function addToFrontmatter(id, frontmatter) {
  frontmatterObj[id] = frontmatter;
}

/*
  Export all flex indexes to disk /public/indexes/all
*/
function exportAllIndexFiles() {
  indexAll.export((key, data) => {
    let dir = 'docs/public/indexes/all';
    fse.writeFileSync(`${dir}/${key}.json`, data !== undefined ? data : '');
  });
}

function exportLatestIndexFiles() {
  indexLatest.export((key, data) => {
    let dir = 'docs/public/indexes/latest';
    fse.writeFileSync(`${dir}/${key}.json`, data !== undefined ? data : '');
  });
}

/*
  Load all HTML files from /docs/.vitepress/dist 
*/
function start() {
  file.walkSync('./docs/.vitepress/dist', walkCB);
  const skipFiles = [
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
        !skipFiles.includes(dir + '/' + files[x]) &&
        dir.indexOf('/dist/dev') === -1
      ) {
        buildContentFile(dir + '/' + files[x]);
      }
    }
  }
}

console.log('\n----- Building FlexSearch Indexes -----');
fse.ensureDirSync('docs/public/indexes/all');
fse.ensureDirSync('docs/public/indexes/latest');

console.log('> Creating content pages in /indexes/content-files/');
start();

console.log(
  '> Creating "all" files in /public/indexes/all (async operation *)'
);
exportAllIndexFiles();

console.log(
  '> Creating "latest" files in  /public/indexes/latest (async operation *)'
);
exportLatestIndexFiles();

console.log('> Creating frontmatterIds file in /.vitepress/');
fs.writeFileSync(
  'docs/.vitepress/frontmatterIds.json',
  JSON.stringify(frontmatterObj)
);
