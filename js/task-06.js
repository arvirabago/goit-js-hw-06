
// Event listener for the 'blur' event on the element with the ID 'validation-input'

document.querySelector('#validation-input').addEventListener('blur', function () {
    // Get the value of the input element and store it in the inputValue variable
    const inputValue = this.value;
    // Parse the expected length from the 'data-length' attribute and store it in the expectedLength variable
    const expectedLength = parseInt(this.getAttribute('data-length'), 10);

    // Check if the length of the inputValue is equal to the expectedLength
    if (inputValue.length === expectedLength) {
        // If equal, remove 'invalid' class and add 'valid' class to the input element
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        
      // If not equal, remove 'valid' class and add 'invalid' class to the input element
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
});
