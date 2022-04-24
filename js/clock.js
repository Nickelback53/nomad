const clock = document.querySelector("h2#clock");













function countDown(){

    const end = new Date("12/24/2022 00:00:00");
    const start = new Date();
    const cd = end - start;
    const _seconds = 1000;
    const _minutes = 60 * _seconds;
    const _hours = 60 * _minutes;
    const _days = 24 * _hours;

    const days = String(Math.floor((cd/_days))).padStart(2,"0");
    const hours   = String(Math.floor((cd%_days )/_hours)).padStart(2,"0");
    const minutes = String(Math.floor((cd%_hours)/_minutes)).padStart(2,"0");
    const seconds = String(Math.floor((cd%_minutes)/_seconds)).padStart(2,"0");



    clock.innerText =`Time Until Christmas Eve\n ${days}d ${hours}h ${minutes}m ${seconds}s`;
}



setInterval(countDown, 1000);