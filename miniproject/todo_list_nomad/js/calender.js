const calender = document.querySelector('.js_calender'),
      calToday = calender.querySelector('.cal_today'),
      calDate = document.querySelector('.js_date'),
      calMonth = calDate.querySelector('.js_month'),
      calYear = calDate.querySelector('.js_year'),
      date = new Date();

function getCalDay() {
    const week = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

    const dayNumber = date.getDay();
    const day = date.getDate();
    const today = week[dayNumber];
   
    calToday.innerText = `${today} ${day}`;
}

function getCalDate() {
    const monthArray = new Array('JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY','AUG', 'SEP', 'OCT', 'NOV', 'DEC');

    const year = date.getFullYear();
    const getMonth = date.getMonth();
    const month = monthArray[getMonth];

    calMonth.innerText = month;
    calYear.innerText = year;
}

function init() {
    getCalDay();
    getCalDate();
}

init();