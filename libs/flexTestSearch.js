const fs = require('fs');
const { Index } = require('flexsearch');

let index = new Index({
  tokenize: 'full',
});

/*
  Rebuild the index from index files
*/
const retrieveIndex = () => {
  const keys = fs
    .readdirSync('indexes/all/', {
      withFileTypes: true,
    })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name.slice(0, -5));

  for (let i = 0, key; i < keys.length; i += 1) {
    key = keys[i];
    //console.log(key);
    const data = fs.readFileSync(`indexes/all/${key}.json`, 'utf8');
    index.import(key, data ?? null);
  }
  //console.log(index);
};

/*
   Execute a search
*/
function search() {
  const query = 'gateway';
  let ids = index.search({
    query: query,
    index: ['content'],
    limit: 100,
    suggest: true,
    //bool: 'or',
  });
  console.log(
    `----- Found "${query}" in ${ids.length} pages with the following IDs`
  );
  console.log('ids', ids);
  console.log(`----- Page titles`);
  ids.forEach((id) => {
    console.log(id, frontmatterIds[id].title);
  });
}

console.log(__dirname);
const frontmatterIds = JSON.parse(
  fs.readFileSync('docs/.vitepress/frontmatterIds.json')
);
console.log('> Build index');
retrieveIndex();
console.log('> Executing search');
search();
