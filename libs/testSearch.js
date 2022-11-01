const fs = require('fs');
const { Document } = require('flexsearch');
var file = require('file');
let arr = [];

const index = new Document({
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
  arr.push({ dir: dirPath, files: files });
}

/*
    Load all JSON files from /dist dir
  */
function loadJsonFiles() {
  file.walkSync('docs/.vitepress/search-files/', walkCB);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    const dir = arr[i].dir;
    const filesArr = arr[i].files;
    for (let x = 0; x < filesArr.length; x++) {
      const path = dir + '/' + filesArr[x];
      console.log(path);
      buildIndex(path);
    }
  }
}
/*
  FlexSearch: Build index, then save it to disk
*/
let cnt = 1;
function buildIndex(path) {
  const document = JSON.parse(fs.readFileSync(path, 'utf8'));
  console.log(document);

  index.add({
    id: cnt++,
    indexPath: document.indexPath,
    docSet: document.docSet,
    url: document.url,
    content: document.content,
  });

  index.export((key, data) =>
    fs.writeFileSync(
      `docs/.vitepress/search-indexes/${key}.json`,
      data !== undefined ? data : ''
    )
  );
  //console.log(index);
}

/*
    FlexSearch: search index
  */
function search() {
  retrieveIndex();
  let ids = index.search({
    query: 'http signed data gateway urls',
    index: ['content'],
    limit: 100,
    //suggest: true,
    //bool: 'or',
  });
  console.log('ids', ids);
}

const retrieveIndex = () => {
  const keys = fs
    .readdirSync('docs/.vitepress/search-indexes/', { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name.slice(0, -5));

  for (let i = 0, key; i < keys.length; i += 1) {
    key = keys[i];
    console.log(key);
    const data = fs.readFileSync(
      `docs/.vitepress/search-indexes/${key}.json`,
      'utf8'
    );
    index.import(key, data ?? null);
  }
};

loadJsonFiles();
search();
