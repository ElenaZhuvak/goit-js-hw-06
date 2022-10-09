const listCategories = document.querySelectorAll('.item');
console.log('Number of categories:', listCategories.length);

const firstTitleCategory = document.querySelectorAll('h2')[0];
console.log('Category:', firstTitleCategory.textContent);

const itemFirstCategory = document.querySelectorAll('.item-list');
const items = itemFirstCategory.forEach((element) => {
    console.log(element.length);
});

const secondTitleCategory = document.querySelectorAll('h2')[1];
console.log('Category:', secondTitleCategory.textContent);

const thirdTitleCategory = document.querySelectorAll('h2')[2];
console.log('Category:', thirdTitleCategory.textContent);

