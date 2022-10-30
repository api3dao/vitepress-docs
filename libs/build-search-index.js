const { Index, Document } = require('flexsearch');

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
    title: 'Camarão na Moranga (Brazilian Shrimp Stuffed Pumpkin)',
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

/*console.log(index.search('bread', { limit: 20 }));
index.searchAsync('bread', function (result) {
  console.log('Results: ', result);
});*/
