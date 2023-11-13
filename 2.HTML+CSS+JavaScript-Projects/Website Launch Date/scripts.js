let countDownDate = new Date("Nov 30, 2023 00:00:00").getTime();
let x = setInterval(() => {
    let nowDate = new Date().getTime();
    let remaining = countDownDate - nowDate;

    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = ': ' + hours;
    document.getElementById('minutes').innerHTML = ': ' + minutes;
    document.getElementById('seconds').innerHTML = ': ' + seconds;

    if (remaining < 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = ': ' + '00';
        document.getElementById('minutes').innerHTML = ': ' + '00';   document.getElementById('seconds').innerHTML = ': ' + '00';
    }

}, 1000);