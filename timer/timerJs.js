let input = document.getElementById('input');
let time = document.getElementById('time');
let button = document.getElementById('btn');
let interval;

time.innerHTML = 0;
input.value = 0;

button.addEventListener('click', start);

function start() {
  if (input.value < 0) {
    time.innerHTML = 0;
    input.value = 0;
  }

  time.innerHTML = input.value;

  clearInterval(interval);
  interval = setInterval(subtractTime, 1000);

  this.removeEventListener('click', start);
  this.addEventListener('click', stop);
}

function subtractTime() {
  if (time.innerHTML > 0) {
    time.innerHTML--;
    input.value--;
  }
}

function stop() {
  clearInterval(interval);

  this.removeEventListener('click', stop);
  this.addEventListener('click', start);
}
