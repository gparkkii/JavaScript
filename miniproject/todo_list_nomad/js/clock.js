const clockContainer = document.querySelector('.js_clock'),
      clockTitle = clockContainer.querySelector('.js_title');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
        // 조건 ? True일 때 실행문 : False일 때 실행문
    }`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
// init이라는 이름은 초기화의 의미를 지닌 함수나 객체를 작성할때 많이 사용한다.
init();
