// ===== All Categories 
const listOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', listOfCategories.length);
// ===== For each category: title and elements
const titleOfCategory = listOfCategories.forEach(category => {
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelector('ul').children.length)
});