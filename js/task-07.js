const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.addEventListener('input', function () {
    const fontSizeValue = this.value;
     textSpan.style.fontSize = `${fontSizeValue}px`;
})