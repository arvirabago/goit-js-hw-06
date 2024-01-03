
// Select all elements with the class "item" and store them in the arrayCategories variable

const arrayCategories = document.querySelectorAll(".item");

// Log the number of categories to the console

console.log(`Number of categories: ${arrayCategories.length}`);

// Iterate over each category in the arrayCategories

arrayCategories.forEach((item) => {

   // Log the name of the category to the console
  console.log(`Category: ${item.firstElementChild.textContent}`);

   // Log the name of the category to the console
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});