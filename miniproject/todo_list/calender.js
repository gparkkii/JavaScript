const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT','NOV', 'DEC'],
          getToday = document.querySelector('.today'),
          calender = getToday.querySelector('#js_cal'),
          newDate = new Date(),
          dayNumber = newDate.getDay(),
          year = newDate.getFullYear(),
          monthNumber = newDate.getMonth(),
          day = newDate.getDate();

function getTodaysValue(){
    calender.textContent = `${today[dayNumber]} / ${
        day === 1 ? day + 'st' 
        : day === 2 ? day + 'nd' 
        : day === 3 ? day + 'rd' 
        : day + 'th' } ${month[monthNumber]} ${year}`;
};

function getTimeClock() {
    const clockTitle = document.querySelector('#js_clock'),
          newDate = new Date(),
          hours = newDate.getHours(),
          minutes = newDate.getMinutes(),
          seconds = newDate.getSeconds();
          
    clockTitle.innerText = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init() {
    getTodaysValue();
    getTimeClock();
    setInterval(getTimeClock, 1000);
};

init();