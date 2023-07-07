const container = document.querySelector('.container');
const reset = document.querySelector('#range');
const label = document.querySelector('label');
let divs;
let grids = reset.value;
label.textContent = `Grids: ${grids} x ${grids}`;

let width = container.scrollWidth;
container.style.height = width + 'px';
for (let i = 1; i <= grids * grids; i++) {
  divs = document.createElement('div');
  container.appendChild(divs);
  divs.setAttribute('class', 'grid');
  container.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
}

window.addEventListener('resize', () => {
  width = container.scrollWidth;
  container.style.height = width + 'px';
});

reset.addEventListener('change', () => {
  grids = reset.value;
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
