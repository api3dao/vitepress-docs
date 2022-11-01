const { Index, Document } = require('flexsearch');
const { readFileSync } = require('fs');
var file = require('file');
var colors = require('colors');
const { parse } = require('node-html-parser');

let arr = [];

/*const options = {
  charset: 'latin',
  preset: 'match',
  tokenize: 'strict',
  cache: false,
  context: true,
};*/
//const index = new Index(options);
console.log('\nBEGIN > BEGIN > BEGIN > BEGIN >\n---------------------------');
const index2 = new Document({
  document: {
    id: 'id',
    index: ['content', 'title'],
  },
});
const books = [
  {
    id: 0,
    title: 'Once in a while it will rain',
    content: 'some times it rain ',
  },
  { id: 1, title: 'When it rain', content: 'the rains in spain' },
];
// index my collection
books.forEach((book) => {
  index2.add({ id: book.id, title: book.title, content: book.content });
  //index.add(book.id, book.content);
  console.log('add:', book.id);
  //index.add(book);
});

let ids2 = index2.search({
  query: 'rain',
  index: ['content', 'title'],
  limit: 100,
  //suggest: true,
  bool: 'or',
});
console.log('ids2', ids2);

const result2 = books.filter((book) => {
  //console.log('book:', book);
  ids2.includes(book.id);
});
console.log('result2', result2);
let cnt2 = 1;
result2.forEach((element) => {
  console.log(element);
  console.log(cnt2++, element.id, element.path, element.title);
  //console.log(element.title);
});

console.log('-----------------------------------------------');
const options = {
  charset: 'latin',
  preset: 'match',
  tokenize: 'strict',
  cache: false,
};
const index = new Index(options);

// my collection
const recipes = [
  { id: 1, path: '1.md', title: 'Orange the cake' },
  {
    id: 2,
    path: '2.md',
    title: 'New York-Style Bacon Egg and Cheese Sandwich',
  },
  { id: 3, path: '3.md', title: 'Bacon Wrapped Cheese grits Stuffed Meatloaf' },
  { id: 4, path: '4.md', title: 'French Yogurt Cake' },
  { id: 5, path: '5.md', title: 'Cookie: Gougeres (French Cheese Puffs)' },
  {
    id: 6,
    path: '6.md',
    title: 'Authentic Brazilian Cheese Bread (Pão de Queijo)',
  },
  {
    id: 7,
    path: '7.md',
    title:
      'Camarão na Moranga (Brazilian Shrimp Stuffed Pumpkin)<body><H1>World</H1><p>Hello</p><H1>Dude</H1>',
  },
  { id: 8, path: '8.md', title: 'Parmesan Cheese grits Muffins' },
  { id: 9, path: '9.md', title: 'cookie and cream Dough Stuffed Oreos' },
];

// index my collection
recipes.forEach((recipe) => {
  index.add(recipe.id, recipe.title);
});

// search (it will return an array of ids)
//const ids = index.search('"Bacon Cheese"', 5);
const ids = index.search({
  query: 'cheese grits',
  limit: 100,
  //suggest: true,
  bool: 'and',
});
console.debug('ids', ids);

// based on the ids returned by the index, look for the recipes for those ids
const result = recipes.filter((recipe) => ids.includes(recipe.id));
console.log('result', result);
let cnt = 1;
result.forEach((element) => {
  console.log('    >>>', cnt++, element.id, element.path, element.title);
  //console.log(element.title);
});
//console.debug(result);
console.log('\n\n');

loadHtmlFiles();

/************************** */
/************************** */
/************************** */
/**
 * Callback for file.walkSync, add each
 * @param {*} dirPath
 * @param {*} dirs
 * @param {*} files
 */
function tempCB(dirPath, dirs, files) {
  arr.push({ dir: dirPath, files: files });
}
function loadHtmlFiles() {
  file.walkSync('./docs/.vitepress/dist', tempCB);
  console.log('----- END WALK SYNC -----');
  for (let i = 0; i < arr.length; i++) {
    extractContent(arr[i]);
  }
}

function extractContent(dir) {
  const arrFiles = dir.files;
  const skipFiles = [
    './docs/.vitepress/dist/index.html',
    './docs/.vitepress/dist/team.html',
    './docs/.vitepress/dist/404.html',
  ];
  for (let x = 0; x < arrFiles.length; x++) {
    const file = arrFiles[x];

    const path = dir.dir + '/' + file;

    if (file.includes('.html') && skipFiles.indexOf(path) === -1) {
      const htmlString = readFileSync(path, 'utf8');

      ////// NODE PARSER////////
      const root = parse(htmlString);

      root.querySelectorAll('body').forEach((element) => {
        let text = element.structuredText.replace(/(\r\n|\n|\r)/gm, ' ');

        const txt = text.split('__VP_HASH_MAP__ =')[0];
        const txt2 = txt.split('Table of Contents for current page  📂')[1];
        let txt3 = txt2.split(
          'Released under the MIT License. Copyright © 2019-present API3'
        )[0];
        if (path.indexOf('quick-start-aws') > -1) {
          console.log('\n***********************************\n' + path);
          console.log(element.structuredText);
          //console.log(txt3);
          console.log('----- STRUCTURED HTML -----');
          console.log(element.querySelectorAll('code').length);
          element.querySelectorAll('code').forEach((el) => {
            console.log('>>>', el.innerHTML);
          });
        }
      });
    }
  }
}

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
let v = `<code><span class="line"><span style="color:#A6ACCD;">AIRNODE_WALLET_MNEMONIC=</span><span style="color:#89DDFF;">""</span></span>
<span class="line"><span style="color:#A6ACCD;">SEPOLIA_PROVIDER_URL=</span><span style="color:#89DDFF;">""</span></span>
<span class="line"><span style="color:#A6ACCD;">SS_COINGECKO_REQUESTS_API_KEY=</span><span style="color:#89DDFF;">""</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">HEARTBEAT_API_KEY=</span><span style="color:#89DDFF;">""</span></span>
<span class="line"><span style="color:#A6ACCD;">HEARTBEAT_URL=</span><span style="color:#89DDFF;">""</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Used for GCP only</span></span>
<span class="line"><span style="color:#A6ACCD;">GCP_PROJECT_ID=</span><span style="color:#89DDFF;">""</span></span>
<span class="line"></span></code>
`;
const root = parse(v);
//console.log(root.structuredText);
