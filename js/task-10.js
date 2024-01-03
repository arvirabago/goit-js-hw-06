function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function getRandomSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes'); // Fix: Use #boxes to select by ID
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    const size = getRandomSize(20, 100);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes'); // Fix: Use #boxes to select by ID
  boxesContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', function () {
  const amount = document.querySelector('input').value;
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
