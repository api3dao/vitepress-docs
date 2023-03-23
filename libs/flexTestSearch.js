const fs = require('fs');
const { Index } = require('flexsearch');

let indexAll = new Index({
  tokenize: 'full',
});
let indexLatest = new Index({
  tokenize: 'full',
});

/*
  Rebuild the indexAll from index files
*/
const retrieveIndexAll = () => {
  let keys = fs
    .readdirSync('docs/public/indexes/all/', {
      withFileTypes: true,
    })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name.slice(0, -5));

  // Need to filter the array since Apple likes to add a hidden file ".DS_"
  keys = keys.filter(filterKeys);
  function filterKeys(key) {
    return ['cfg', 'ctx', 'map', 'reg'].includes(key);
  }
  console.log('retrieveIndexAll keys array', keys);

  for (let i = 0, key; i < keys.length; i += 1) {
    key = keys[i];
    const data = fs.readFileSync(`docs/public/indexes/all/${key}.json`, 'utf8');
    indexAll.import(key, data ?? null);
  }
};

/*
  Rebuild the indexLatest from index files
*/
const retrieveIndexLatest = () => {
  let keys = fs
    .readdirSync('docs/public/indexes/latest/', {
      withFileTypes: true,
    })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name.slice(0, -5));

  // Need to filter the array since Apple likes to add a hidden file ".DS_"
  keys = keys.filter(filterKeys);
  function filterKeys(key) {
    return ['cfg', 'ctx', 'map', 'reg'].includes(key);
  }
  console.log('retrieveIndexLatest keys array', keys);

  for (let i = 0, key; i < keys.length; i += 1) {
    key = keys[i];
    const data = fs.readFileSync(
      `docs/public/indexes/latest/${key}.json`,
      'utf8'
    );
    indexLatest.import(key, data ?? null);
  }
};

/*
   Execute a search on indexAll
*/
function searchIndexAll() {
  const query = 'gateway';
  let ids = indexAll.search({
    query: query,
    index: ['content'],
    limit: 100,
    suggest: false,
    bool: 'and',
  });
  console.log('----- indexAll -----');
  console.log(`Found "${query}" in (${ids.length}) pages.`);
  console.log('ids', ids);
  console.log(`Page titles`);
  ids.forEach((id) => {
    console.log(id, frontmatterIds[id].title);
  });
}

/*
   Execute a search on indexLatest
*/
function searchIndexLatest() {
  const query = 'gateway';
  let ids = indexLatest.search({
    query: query,
    index: ['content'],
    limit: 100,
    suggest: false,
    bool: 'and',
  });
  console.log('----- indexLatest -----');
  console.log(`Found "${query}" in (${ids.length}) pages.`);
  console.log('ids', ids);
  console.log(`Page titles`);
  ids.forEach((id) => {
    console.log(id, frontmatterIds[id].title);
  });
}

console.log(__dirname);
const frontmatterIds = JSON.parse(
  fs.readFileSync('docs/.vitepress/frontmatterIds.json')
);
console.log('> Build indexes');
retrieveIndexAll();
retrieveIndexLatest();
console.log('> Executing searches');
searchIndexAll();
searchIndexLatest();
console.log('----- END -----\n');
