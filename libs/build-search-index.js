const { Index } = require('flexsearch');

const options = {
  charset: 'latin:extra',
  preset: 'match',
  tokenize: 'strict',
  cache: false,
};
const index = new Index(options);

// my collection
const recipes = [
  { id: 1, title: 'Orange the cake' },
  { id: 2, title: 'New York-Style Bacon Egg and Cheese Sandwich' },
  { id: 3, title: 'Bacon Wrapped Cheese Stuffed Meatloaf' },
  { id: 4, title: 'French Yogurt Cake' },
  { id: 5, title: 'Cookies: Gougeres (French Cheese Puffs)' },
  { id: 6, title: 'Authentic Brazilian Cheese Bread (Pão de Queijo)' },
  { id: 7, title: 'Camarão na Moranga (Brazilian Shrimp Stuffed Pumpkin)' },
  { id: 8, title: 'Parmesan Cheese Muffins' },
  { id: 9, title: 'Cookie Dough Stuffed Oreos' },
];

// index my collection
recipes.forEach((recipe) => {
  index.add(recipe.id, recipe.title);
});

// search (it will return an array of ids)
const ids = index.search('cook', 5);
console.debug(ids);
// based on the ids returned by the index, look for the recipes for those ids
const result = recipes.filter((recipe) => ids.includes(recipe.id));
result.forEach((element) => {
  console.log(element.title.replace('Cookie', '~cookie~'));
  //console.log(element.title);
});
//console.debug(result);
