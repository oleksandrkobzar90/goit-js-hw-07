'use strict';
const widget = document.querySelector('.widget');
const colorText = widget.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

// title.textContent = 'Blablabla';

changeColorBtn.addEventListener('click', () => {
  const changedColor = getRandomHexColor();
  document.body.style.backgroundColor = changedColor;
  colorText.textContent = changedColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
