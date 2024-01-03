
// Define the array of ingredients

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Get the DOM element with the ID 'ingredients' and store it in the ingredientsList variable
const ingredientsList = document.getElementById('ingredients');

// Iterate over each ingredient in the array

ingredients.forEach((ingredient) => {
 
  // Create a new list item element for the ingredient
  
  const listItem = document.createElement('li');

  // Set the text content of the list item to the current ingredient
  
  listItem.textContent = ingredient;

// Add the 'item' class to the list item for styling

  listItem.classList.add('item');

 // Append the list item to the ingredientsList

  ingredientsList.appendChild(listItem);
});
