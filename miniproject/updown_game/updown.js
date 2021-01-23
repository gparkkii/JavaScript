const form = document.querySelector('.form'),
      input = form.querySelector('#js_input'),
      check = form.querySelector('#js_check'),
      status = document.querySelector('.status'),
      guesses = status.querySelector('.guesses'),
      result = status.querySelector('.result'),
      answer = status.querySelector('.answer');

let random = Math.floor((Math.random() * 100) + 1);
console.log(random);
let guessList = [];
let guessCount = 10;


check.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = Number(input.value);
    inputAlert(guess);
})

function inputAlert(guess) {
    if(Number.isNaN(guess)) {
        alert('숫자를 입력해주세요');
    } else if(guess > 100) {
        alert('100 미만의 숫자를 입력해주세요');
    } else if(guess < 1) {
        alert('1 이상의 숫자를 입력해주세요');
    } else{
        if(guessCount === 0) {
            displayMessage(`Game Over!!! <br> Answer is <strong>${random}</strong>`);
            endGame();
        } else{
            checkAnswer(guess);
            displayGuess(guess);
        }
    }
}

function checkAnswer(guess) {
    if(guess === random) {
        displayMessage(`Correct!!! <br> Answer is <strong>${random}</strong>`);
        endGame();
    } else if(guess < random) {
        displayMessage(`UP`);
    } else {
        displayMessage(`DOWN`);
    }
}

function displayMessage(message) {
    answer.innerHTML = `${message}`;
}

function displayGuess(guess) {
    if(guessList.includes(guess)) {
        alert(`중복입니다`);
    } else {
        guessCount--;
        result.innerHTML = `Guesses Remaining  : ${guessCount}`;
        guessList.push(guess);
        guesses.innerHTML = `My Guess : ${guessList}`;
        input.value = '';
        input.focus();
    }
}

function endGame() {
    input.setAttribute('disabled','');
    check.setAttribute('disabled','');

    let reload = document.createElement('button');
    reload.type = 'button';
    reload.id = 'reload'
    reload.innerHTML = `<h2 id="new_game">New Game</h2>`;
    status.appendChild(reload);
    newGame();
}

function newGame() {
    const reloadButton = status.querySelector('#reload');
    reloadButton.addEventListener('click',() => {
        random = Math.floor((Math.random() * 100) + 1);
        console.log(random);
        guessList = [];
        guessCount = 10;
        input.value = '';
        result.innerHTML = '';
        guesses.innerHTML = '';
        answer.innerHTML = '';
        input.removeAttribute('disabled');
        check.removeAttribute('disabled');
        status.removeChild(reload);
    })
}

