const body = document.querySelector('body');

function paintImage(imgNumber) {
    const image = new Image;
    image.src = `./image/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * 3);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();