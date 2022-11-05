const fs = require('fs');
const { Document, Index } = require('flexsearch');

let index = new Index({
  tokenize: 'full',
});

/*
  Rebuild the index from index files
*/
const retrieveIndex = () => {
  const keys = fs
    .readdirSync('docs/.vitepress/search-latest-index/', {
      withFileTypes: true,
    })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name.slice(0, -5));

  for (let i = 0, key; i < keys.length; i += 1) {
    key = keys[i];
    console.log(key);
    const data = fs.readFileSync(
      `docs/.vitepress/search-latest-index/${key}.json`,
      'utf8'
    );
    index.import(key, data ?? null);
  }
  console.log(index);
};

/*
   FlexSearch: search index
*/
function search() {
  retrieveIndex();
  let ids = index.search({
    query: 'gate',
    index: ['content'],
    limit: 100,
    suggest: true,
    //bool: 'or',
  });
  console.log('ids', ids);
  //console.log('ids', ids[0].result);
  ids.forEach((id) => {
    console.log(id, frontmatterIds[id].title);
  });
}

console.log(__dirname);
const frontmatterIds = JSON.parse(
  fs.readFileSync('docs/.vitepress/searchFrontmatterIds.json')
);
search();
