// Function to generate a random hexadecimal color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let boxCount = 0; // Variable to keep track of the total number of boxes created

// Function to create boxes based on the specified amount
function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes'); // Select the container by ID
  let size = 30; // Initial size of the first box

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    size += 10; // Increase size by 10 for each new box
    box.style.width = `${size}px`; // Set the width using the calculated size
    box.style.height = `${size}px`; // Set the height using the calculated size
    box.style.backgroundColor = getRandomHexColor(); // Set a random background color
    boxesContainer.appendChild(box); // Append the box to the container
    boxCount++; // Increment the box count
  }
}

// Function to destroy all existing boxes
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes'); // Select the container by ID
  boxesContainer.innerHTML = ''; // Clear the container content
  boxCount = 0; // Reset the box count
}

// Event listener for the "Create" button
document.querySelector('[data-create]').addEventListener('click', function () {
  const amount = document.querySelector('input').value; // Get the input value
  createBoxes(parseInt(amount)); // Call the createBoxes function with the specified amount
});

// Event listener for the "Destroy" button
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
