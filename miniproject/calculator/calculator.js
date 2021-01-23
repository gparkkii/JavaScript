const input = document.querySelector('#input'),
    //   status = document.querySelector('.status'),
      cancel = document.querySelector('.js_cancel'),
      negative = document.querySelector('.js_negative'),
      remainder = document.querySelector('.js_remainder'),
      devision = document.querySelector('.js_devision'),
      multiple = document.querySelector('.js_multiple'),
      minus = document.querySelector('.js_minus'),
      plus = document.querySelector('.js_plus'),
      dot = document.querySelector('.js_dot'),
      answer = document.querySelector('.js_answer'),
      number = document.querySelectorAll('.js_number'),
      button = document.querySelector('button');

let operator = '';
let currentValue = '';
let prevValue = '';

function getAnswer() {
    Array.from(number).forEach(nums => {
        nums.addEventListener('click', function () {
            currentValue += this.innerText;
            input.value = currentValue;
        })
    })

    plus.addEventListener('click',() => {
        if(prevValue){
            alert('get answer');
        } else {
            operator = '+'
            prevValue = input.value;
            currentValue = '';
            input.value = '';
            input.focus();
        }
    })
    minus.addEventListener('click',() => {
        if(prevValue){
            alert('get answer');
        } else {
            operator = '-'
            prevValue = input.value;
            currentValue = '';
            input.value = '';
            input.focus();
        }
    })
    devision.addEventListener('click',() => {
        if(prevValue){
            alert('get answer');
        } else {
            operator = '/'
            prevValue = input.value;
            currentValue = '';
            input.value = '';
            input.focus();
        }
    })
    multiple.addEventListener('click',() => {
        if(prevValue){
            alert('get answer');
        } else {
            operator = '*'
            prevValue = input.value;
            currentValue = '';
            input.value = '';
            input.focus();
        }
    })
    remainder.addEventListener('click',() => {
        if(prevValue){
            alert('get answer');
        } else {
            operator = '%'
            prevValue = input.value;
            currentValue = '';
            input.value = '';
            input.focus();
        }
    })
    negative.addEventListener('click', () => {
        input.value = '-'+input.value;
    })

    cancel.addEventListener('click', () => {
            operator = '';
            currentValue = '';
            prevValue = '';
            input.value = null;
            input.focus();
    });

    answer.addEventListener('click', () => {
        if(operator === '+') {
            input.value = Number(prevValue) + Number(currentValue);
            operator = '';
        } else if(operator === '-') {
            input.value = Number(prevValue) - Number(currentValue);
            operator = '';
        } else if(operator === '/') {
            input.value = Number(prevValue) / Number(currentValue);
            operator = '';
        } else if(operator === '*') {
            input.value = Number(prevValue) * Number(currentValue);
            operator = '';
        } else if(operator === '%') {
            input.value = Number(prevValue) % Number(currentValue);
            operator = '';
        }
    })
}

function init() {
    getAnswer();
}

init();