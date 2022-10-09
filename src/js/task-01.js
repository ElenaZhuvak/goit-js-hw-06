// ===== All Categories 
const listCategories = document.querySelectorAll('.item');
console.log('Number of categories:', listCategories.length);

// ===== First Category
const firstTitleCategory = document.querySelectorAll('h2')[0];
console.log('Category:', firstTitleCategory.textContent);

const elemFirstCateg = document.querySelectorAll('.item-list')[0];
console.log('Elements:', elemFirstCateg.children.length);

// ===== Second Category
const secondTitleCategory = document.querySelectorAll('h2')[1];
console.log('Category:', secondTitleCategory.textContent);

const elemSecondCateg = document.querySelectorAll('.item-list')[1];
console.log('Elements:', elemSecondCateg.children.length);

// ===== Third Category
const thirdTitleCategory = document.querySelectorAll('h2')[2];
console.log('Category:', thirdTitleCategory.textContent);

const elemThirdCateg = document.querySelectorAll('.item-list')[2];
console.log('Elements:', elemThirdCateg.children.length);
