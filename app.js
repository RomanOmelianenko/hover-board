const board = document.querySelector('#board');
const SQUARES_NUMBER = 600;

// const colors = ['red', 'blue', 'green', 'yellow', 'purple']

for (let i = 0; i < SQUARES_NUMBER; i+= 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => 
    setColor(square)
  );

  square.addEventListener('mouseleave', () => 
    removeColor(square)
  );

  board.appendChild(square);
}

function setColor(element) {
  const randomColor = getRandomColor()

  element.style.backgroundColor = '#' + randomColor;
  element.style.boxShadow = `0 0 2px #${randomColor}, 0 0 10px #${randomColor}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

// 8.1 функция для создания рандомного цвета (из нашего массива)
// function getColor() {
//   const index = Math.floor(Math.random() * colors.length);
//   return colors[index];
// }

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}