const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('sec');


const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    console.log(days,hours,minutes,seconds);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formateTime(hours);
    minutesE1.innerHTML = formateTime(minutes);
    secondsE1.innerHTML = formateTime(seconds);

    function formateTime(time) {
        return time <10 ? `0${time}`:time;
    }
}


countdown();

setInterval(countdown,1000);