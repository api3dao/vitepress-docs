var textVersion = require('textversionjs');
const { readFileSync, writeFileSync } = require('fs');
var file = require('file');
const { Index, Document } = require('flexsearch');

const path = 'docs/.vitepress/dist/guides/airnode/quick-start-aws/index.html';
const htmlString = readFileSync(path, 'utf8');

var plainText = textVersion(htmlString);

let json = { id: 0, path: path, content: plainText };
console.log(json);
writeFileSync('libs/index.json', JSON.stringify(json));

const content = JSON.parse(readFileSync('libs/index.json', 'utf8'));
const index = new Document({
  document: {
    id: 'id',
    index: ['content', 'path'],
  },
});

index.add({ id: 0, path: path, content: plainText });
console.log(index);
let ids = index.search({
  query: 'below    gateway shows the HTTP',
  index: ['content', 'path'],
  limit: 100,
  //suggest: true,
  bool: 'or',
});
console.log('ids', ids);
