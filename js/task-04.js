
// Select the decrement button using attribute selector and store it in decrementButton variable

const decrementButton = document.querySelector('[data-action="decrement"]');

// Select the increment button using attribute selector and store it in incrementButton variable

const incrementButton = document.querySelector('[data-action="increment"]');

// Get the DOM element with the ID 'value' and store it in the valueElement variable

const valueElement = document.getElementById('value');

// Initialize the counterValue variable to 0

let counterValue = 0;

// Function to update the text content of the valueElement with the current counterValue

const updateCounter = () => {
    valueElement.textContent = counterValue;
};

// Event listener for the decrement button

decrementButton.addEventListener('click', () => {
    
    // Decrease the counterValue by 1
    
    counterValue -= 1;
    
    // Call the updateCounter function to update the displayed value
    
    updateCounter();
});

// Event listener for the increment button

incrementButton.addEventListener('click', () => {
    
    // Increase the counterValue by 1
    
    counterValue += 1;
    
    // Call the updateCounter function to update the displayed value
    
    updateCounter();
});
