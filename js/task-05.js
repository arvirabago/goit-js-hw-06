
// Get the DOM element with the ID 'name-input' and store it in the nameInput variable

const nameInput = document.getElementById('name-input');

// Get the DOM element with the ID 'name-output' and store it in the nameOutput variable

const nameOutput = document.getElementById('name-output');

// Event listener for the 'input' event on the nameInput element
nameInput.addEventListener('input', () => {
    
    // Get the trimmed value from the nameInput and store it in the inputValue variable
    
    const inputValue = nameInput.value.trim();
    
    // Set the text content of the nameOutput to the inputValue or 'Anonymous' if inputValue is empty
    
    nameOutput.textContent = inputValue || 'Anonymous';
});
