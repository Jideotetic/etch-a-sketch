const container = document.querySelector('#container');
const range = document.querySelector('#range');
const label = document.querySelector('label');
const color = document.querySelector('#color');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const rainbow = document.querySelector('#rainbow');
let divs;
let grids = range.value;
label.textContent = `Grids: ${grids} x ${grids}`;
let gridColor = color.value;
let barStatus = false;

let width = container.scrollWidth;
container.style.height = width + 'px';
for (let i = 1; i <= grids * grids; i++) {
  divs = document.createElement('div');
  container.appendChild(divs);
  divs.setAttribute('class', 'grid');
  container.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('grid')) {
    e.target.style.backgroundColor = color.value;
    e.target.classList.remove('grid');
    e.target.style.cursor = 'pointer';
  }
});

eraser.addEventListener('click', () => {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('grid')) {
      return;
    } else {
      e.target.style.backgroundColor = '#fff';
      e.target.classList.add('grid');
    }
  });
});

color.addEventListener('change', () => {
  container.addEventListener('click', (e) => {
    e.target.style.backgroundColor = color.value;
  });
});

clear.addEventListener('click', () => {
  container.innerHTML = '';
  for (let i = 1; i <= grids * grids; i++) {
    divs = document.createElement('div');
    container.appendChild(divs);
    divs.setAttribute('class', 'grid');
    container.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
  }
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('grid')) {
      e.target.style.backgroundColor = color.value;
      e.target.classList.remove('grid');
    }
  });
});

window.addEventListener('resize', () => {
  width = container.scrollWidth;
  container.style.height = width + 'px';
});

range.addEventListener('change', () => {
  grids = range.value;
  container.innerHTML = '';
  for (let i = 1; i <= grids * grids; i++) {
    divs = document.createElement('div');
    container.appendChild(divs);
    divs.setAttribute('class', 'grid');
    container.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
    label.textContent = `Grids: ${grids} x ${grids}`;
  }
});

function generateRandomColor() {
  let maxVal = 0xffffff;
  let randomNumber = Math.floor(Math.random() * maxVal);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

rainbow.addEventListener('click', () => {
  container.addEventListener('click', (e) => {
    e.target.style.backgroundColor = generateRandomColor();
  });
});
