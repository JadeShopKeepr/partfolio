const gameBoard = document.getElementById('retro-board');
let snake = [{ x: 10, y: 10 }];
let direction = 'right';
let foodPos = generateFood();
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
const instruction = document.getElementById('instruction');
const instructionStop = document.getElementById('instructionStop');
const logo = document.getElementById('logo');
function draw() {
  gameBoard.innerHTML = '';
  drawSnake();
  drawFood();
}
function drawSnake() {
  snake.forEach((segment) => {
    const snakeBody = createGameElement('div', 'snake');
    setPostion(snakeBody, segment);
    gameBoard.appendChild(snakeBody);
  });
}
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function setPostion(element, postion) {
  element.style.gridColumn = postion.x;
  element.style.gridRow = postion.y;
}

function drawFood() {
  const food = createGameElement('div', 'food');
  setPostion(food, foodPos);
  gameBoard.appendChild(food);
}
function generateFood() {
  const x = Math.floor(Math.random() * 20) + 1;
  const y = Math.floor(Math.random() * 20) + 1;
  console.log('Food generated:', x, y);
  return { x, y };
}

function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case 'right':
      head.x++;
      break;
    case 'left':
      head.x--;
      break;
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
  }
  snake.unshift(head);
  if (head.x === foodPos.x && head.y === foodPos.y) {
    food = generateFood();
    clearInterval();
    gameInterval = setInterval(() => {
      move();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
}

function start() {
  gameStarted = true;
  instruction.style.display = 'none';
  gameInterval = setInterval(() => {
    move();
    //checkColl();
    draw();
  }, gameSpeedDelay);
}
