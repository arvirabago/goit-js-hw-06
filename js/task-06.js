document.querySelector('#validation-input').addEventListener('blur', function() {
    const inputValue = this.value;
    const expectedLength = parseInt(this.getAttribute('data-length'), 10);

    if (inputValue.length === expectedLength) {
      this.classList.remove('invalid');
      this.classList.add('valid');
    } else {
      this.classList.remove('valid');
      this.classList.add('invalid');
    }
});