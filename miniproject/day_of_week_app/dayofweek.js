const weekday = document.querySelector('#weekday'),
      quote = document.querySelector('#quote'),
      prev = document.querySelector('#prev'),
      next = document.querySelector('#next'),
      today = document.querySelector('#today'),
      date = new Date(),
      weekNumber = date.getDay();

let nameOfDay,
    getQuote,
    newNumber = weekNumber;

function thePrevDay() {
    if (newNumber === 0) {
        newNumber = 6;
    } else {
        newNumber -= 1;
    }
    console.log(newNumber);
    switchDay(newNumber);
}

function theNextDay() {
    if (newNumber === 6) {
        newNumber = 0;
    } else {
        newNumber += 1;
    }
    console.log(newNumber);
    switchDay(newNumber);
}

function backToday() {
    switchDay(weekNumber);
}

function switchDay(number) {
    switch(number) {
        case 0:
            nameOfDay = 'Sunday';
            getQuote = 'Time to chillax!';
            weekday.style.color = '#f94144';
            quote.style.color = '#f94144';
            break;
    
        case 1:
            nameOfDay = 'Monday';
            getQuote = 'Monday morning blues!';
            weekday.style.color = '#f3722c';
            quote.style.color = '#f3722c';
            break;
    
        case 2:
            nameOfDay = 'Tuesday';
            getQuote = 'Taco Time!';
            weekday.style.color = '#f8961e';
            quote.style.color = '#f8961e';
            break;
    
        case 3:
            nameOfDay = 'Wednesday';
            getQuote = 'Two more days to the weekend';
            weekday.style.color = '#f9c74f';
            quote.style.color = '#f9c74f';
            break;
    
        case 4:
            nameOfDay = 'Thursday';
            getQuote = 'The weekend is almost here...';
            weekday.style.color = '#90be6d';
            quote.style.color = '#90be6d';
            break;
    
        case 5:
            nameOfDay = 'Friday';
            getQuote = 'Weekend is here!';
            weekday.style.color = '#43aa8b';
            quote.style.color = '#43aa8b';
            break;
    
        case 6:
            nameOfDay = 'Saturday';
            getQuote = 'Time to party!';
            weekday.style.color = '#577590';
            quote.style.color = '#577590';
            break;
    
        default:
            break;
    } 
    displayWeekday();   
}

function displayWeekday() {
    weekday.textContent = `${nameOfDay}`;
    quote.textContent = `${getQuote}`;
}

function init() {
    switchDay(weekNumber);
    today.addEventListener('click',backToday);
    prev.addEventListener('click', thePrevDay);
    next.addEventListener('click', theNextDay);

}

init();