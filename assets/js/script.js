
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const fieldTime = document.querySelector('.time');

start.addEventListener('click', startTime);
pause.addEventListener('click', pauseTime);
stop.addEventListener('click', resetTime);

let ms = 0;
let m = 0;
let s = 0;

let startNew = 10;
let timer;

function startTime() {
  timer = setInterval(() => { stopwatch(); }, start);
  start.setAttribute('disabled', '')
}

function pauseTime() {
  clearInterval(timer);
  start.removeAttribute('disabled', '')
}

function resetTime() {
  fieldTime.innerText = "00:00:00";
  clearInterval(timer);
  h = 0;
  m = 0;
  s = 0;
  start.removeAttribute('disabled', '')
}

function stopwatch() {
  ms++
  if (ms == 100) {
    ms = 0;
    s++
    if (s == 60) {
      s = 0;
      m++
    }
  }
  fieldTime.innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
}