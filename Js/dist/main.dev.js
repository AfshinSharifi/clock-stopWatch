"use strict";

var sec = document.querySelector('.clock__seconds-text');
var min = document.querySelector('.clock__minutes-text');
var hour = document.querySelector('.clock__hours-text');
var day = document.querySelector('.clock__day-text');
var dayNum = document.querySelector('.clock__date-text-day');
var month = document.querySelector('.clock__date-text-month');
var year = document.querySelector('.clock__date-text-year');
var stopWatchSec = document.querySelector('.stopWatch__seconds-text');
var stopWatchMin = document.querySelector('.stopWatch__minutes-text');
var stopWatchHour = document.querySelector('.stopWatch__hours-text');
var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');
var bClock = document.querySelector('.bClock');
var bStop = document.querySelector('.bStop'); //Global Variables

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
isCheck = true;
var minutes = 0;
var hours = 0;
var seconds = 0;
var interval; //Add Event Listeners

document.addEventListener('DOMContentLoaded', updateClock);
start.addEventListener('click', function () {
  start.setAttribute('disabled', true);
  stop.removeAttribute('disabled');
  reset.removeAttribute('disabled');
  clearInterval(interval);
  interval = setInterval(function () {
    startStopWatch();
  }, 10);
  isCheck = true;
});
stop.addEventListener('click', function () {
  isCheck = false;
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', true);
});
reset.addEventListener('click', resetStopWatch);
bStop.addEventListener('click', function () {
  document.querySelector('.stopWatch').style.right = '0';
});
bClock.addEventListener('click', function () {
  document.querySelector('.stopWatch').style.right = '-200%';
}); //Functions
//updateClock function 

function updateClock() {
  setInterval(function () {
    sec.childNodes[1].innerHTML = new Date().getSeconds();
    zero(sec);
  }, 1000);
  min.childNodes[1].innerHTML = new Date().getMinutes();
  zero(min);
  hour.childNodes[1].innerHTML = new Date().getHours();
  zero(hour);
  day.innerHTML = days[new Date().getDay()];
  dayNum.innerHTML = new Date().getDate();

  if (dayNum.innerHTML < 10) {
    dayNum.innerHTML = '0' + dayNum.innerHTML;
  }

  ;
  month.innerHTML = new Date().getMonth() + 1;

  if (month.innerHTML < 10) {
    month.innerHTML = '0' + month.innerHTML;
  }

  ;
  year.innerHTML = String(new Date().getFullYear()).slice(2);
}

function startStopWatch() {
  if (isCheck) {
    seconds++;
    stopWatchSec.childNodes[1].innerHTML = seconds;
    zero(stopWatchSec);

    if (seconds === 99) {
      seconds = 0;
      minutes += 1;
      stopWatchMin.childNodes[1].innerHTML = minutes;
      zero(stopWatchMin);
    } else if (minutes === 59) {
      minutes = 0;
      hours += 1;
      stopWatchHour.childNodes[1].innerHTML = hours;
      zero(stopWatchHour);
    }
  }

  ;
}

function resetStopWatch() {
  stopWatchSec.childNodes[1].innerHTML = '0';
  zero(stopWatchSec);
  stopWatchMin.childNodes[1].innerHTML = '0';
  zero(stopWatchMin);
  stopWatchHour.childNodes[1].innerHTML = '0';
  zero(stopWatchHour);
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(interval);
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', true);
  reset.setAttribute('disabled', true);
}

function zero(num) {
  if (num.childNodes[1].innerHTML > 9) {
    num.childNodes[0].innerText = '';
  } else {
    num.childNodes[0].innerText = '0';
  }
}