'use strict';
const categories = document.querySelector('#categories');
const categoriesList = document.querySelectorAll('.item');
categories.classList.add('categories-css');

console.log(`Number of categories: ${categoriesList.length}`);

Array.from(categoriesList).forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
