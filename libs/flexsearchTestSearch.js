const fs = require('fs');
const { Document } = require('flexsearch');

const index = new Document({
  document: {
    id: 'id',
    index: ['content', 'docSet', 'contentPath', 'url'],
  },
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
};

/*
   FlexSearch: search index
*/
function search() {
  retrieveIndex();
  let ids = index.search({
    query: 'http signed data gateway',
    index: ['content'],
    limit: 100,
    //suggest: true,
    //bool: 'or',
  });
  console.log('ids', ids);
}

search();
