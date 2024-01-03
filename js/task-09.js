// Function to generate a random hex color code
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Get the body element and store it in the bodyEl variable
const bodyEl = document.querySelector("body");

// Get the element with the class 'change-color' and store it in the changeColorEl variable
const changeColorEl = document.querySelector(".change-color");

// Get the element with the class 'color' and store it in the colorEl variable
const colorEl = document.querySelector(".color");

// Add an event listener for the 'click' event on the changeColorEl, calling the changeBgColorRandom function
changeColorEl.addEventListener("click", changeBgColorRandom);

// Function to change the background color randomly
function changeBgColorRandom() {
  // Set the body background color to a random hex color
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  // Set the text content of the colorEl to the newly generated hex color
  colorEl.textContent = getRandomHexColor();
}
