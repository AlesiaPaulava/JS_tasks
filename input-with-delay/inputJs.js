let h2 = document.createElement('h2');
let input = document.createElement('input');
let interval;

document.body.append(h2, input);

h2.style.height = '30px';
h2.textContent = 'Text';

input.addEventListener('keypress', enter);

function enter() {
  clearTimeout(interval);

  interval = setTimeout(delay, 300);
}

function delay() {
  h2.textContent = input.value;
}
