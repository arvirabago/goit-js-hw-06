// Get the DOM element with the ID 'font-size-control' and store it in the fontSizeControl variable
const fontSizeControl = document.querySelector('#font-size-control');

// Get the DOM element with the ID 'text' and store it in the textSpan variable
const textSpan = document.querySelector('#text');

// Event listener for the 'input' event on the fontSizeControl element
fontSizeControl.addEventListener('input', function () {
    
    // Get the value of the fontSizeControl and store it in the fontSizeValue variable
    const fontSizeValue = this.value;
    
    // Set the font size of the textSpan to the fontSizeValue with units 'px'
    textSpan.style.fontSize = `${fontSizeValue}px`;
});
