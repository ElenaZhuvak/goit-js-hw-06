const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('ul#ingredients');
console.log(listIngredients);

const itemsEl = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;

  return item;
});

console.log(itemsEl);

listIngredients.append(...itemsEl);


