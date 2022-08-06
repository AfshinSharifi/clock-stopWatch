const sec = document.querySelector('.clock__seconds-text');
const min = document.querySelector('.clock__minutes-text');
const hour = document.querySelector('.clock__hours-text');
const day = document.querySelector('.clock__day-text');
const dayNum = document.querySelector('.clock__date-text-day');
const month = document.querySelector('.clock__date-text-month');
const year = document.querySelector('.clock__date-text-year');
const stopWatchSec = document.querySelector('.stopWatch__seconds-text');
const stopWatchMin = document.querySelector('.stopWatch__minutes-text');
const stopWatchHour = document.querySelector('.stopWatch__hours-text');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const bClock = document.querySelector('.bClock');
const bStop = document.querySelector('.bStop');

//Global Variables
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
isCheck = true;
let minutes = 0;
let hours = 0;
let seconds = 0;
let interval;

//Add Event Listeners
document.addEventListener('DOMContentLoaded', updateClock);
start.addEventListener('click', () => {
    start.setAttribute('disabled', true);
    stop.removeAttribute('disabled');
    reset.removeAttribute('disabled');
    clearInterval(interval);
    interval = setInterval(() => {
        startStopWatch();
    }, 10);
    isCheck = true;
})
stop.addEventListener('click', () => {
    isCheck = false;
    start.removeAttribute('disabled');
    stop.setAttribute('disabled', true);
});
reset.addEventListener('click', resetStopWatch);
bStop.addEventListener('click', () => {
    document.querySelector('.stopWatch').style.right = '0';
})
bClock.addEventListener('click', () => {
    document.querySelector('.stopWatch').style.right = '-200%';
})


//Functions
//updateClock function 
function updateClock() {
    setInterval(() => {
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
    };
    month.innerHTML = new Date().getMonth() + 1;
    if (month.innerHTML < 10) {
        month.innerHTML = '0' + month.innerHTML;
    };
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
    };
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