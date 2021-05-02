console.log('inside js file');

const body = document.getElementById('body');
const container1 = document.getElementById('img-1');
const container2 = document.getElementById('img-2');
const container3 = document.getElementById('img-3');
const container4 = document.getElementById('img-4');
const container5 = document.getElementById('img-5');
const container = document.getElementsByClassName('container');
const number = document.getElementById('number').innerText;
const check = document.getElementById('check');
const play = document.getElementById('Again');
const show = document.getElementById('show-msg');
const sc = document.getElementById('score');
const highsc = document.getElementById('highscore');

let RandomNumber;

let score = 20, Highscore = 0;
updateScore();

play.addEventListener('click', () => {
    RandomNumber = findRandomNumber();
    play.style.display = "none";
    check.style.visibility = "visible";
    score = 20;
    checkNumber();

})
check.addEventListener('click', checkNumber);

function checkNumber() {
    const number = document.getElementById('number').value;
    console.log(number);
    if (number == "")
        show.innerText = "Enter Any number between 1 to 20";
    if (number < 1 || number > 20) {
        show.innerText = "Enter A valid number";
        document.getElementById('number').value = "";
    }

    if (number == RandomNumber) {
        show.innerText = "You win the Game";
        play.style.display = "block";
        check.style.visibility = "hidden";
        Highscore = max(score, Highscore);
    }

    else if (number > RandomNumber) {
        show.innerText = `Number ${number} is too high`;
        score--;
    }

    else if (number < RandomNumber) {
        show.innerText = `Number ${number} is too low`;
        score--;
    }

    document.getElementById('number').value = "";
    updateScore();

}

function findRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

function updateScore() {
    document.getElementById('score').innerText = `Score :${score}`;
    document.getElementById('highscore').innerText = `High Score :${Highscore}`;
}


//    mouse hovering event listner
let b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
container1.addEventListener('mouseover', () => {
    body.style.background = "url('/bg1.jpg')no-repeat center  center/cover";
});

container2.addEventListener('mouseover', () => {
    body.style.background = "url('/bg2.jpg')no-repeat center  center/cover";
});

container3.addEventListener('mouseover', () => {
    body.style.background = "url('/bg3.jpg')no-repeat center  center/cover";
});

container4.addEventListener('mouseover', () => {
    body.style.background = "url('/bg4.jpg')no-repeat center  center/cover";
});

container5.addEventListener('mouseover', () => {
    body.style.background = "url('/bg5.jpg')no-repeat center  center/cover";
});

// mouse out event listener
container1.addEventListener('mouseout', () => {
    if (b1 == 0)
        body.style.background = "url('/bg6.jpg')no-repeat center  center/cover";
});

container2.addEventListener('mouseout', () => {
    if (b2 == 0)
        body.style.background = "url('/bg6.jpg')no-repeat center  center/cover";
});

container3.addEventListener('mouseout', () => {
    if (b3 == 0)
        body.style.background = "url('/bg6.jpg')no-repeat center  center/cover";
});

container4.addEventListener('mouseout', () => {
    if (b4 == 0)
        body.style.background = "url('/bg6.jpg')no-repeat center  center/cover";
});

container5.addEventListener('mouseout', () => {
    if (b5 == 0)
        body.style.background = "url('/bg6.jpg')no-repeat center  center/cover";
});

//    //    click event listner
container1.addEventListener('click', () => {
    container1.style.border = "2px solid #e9efef";
    body.style.background = "url('/bg1.jpg')no-repeat center  center/cover";
    b1 = 1;
});

container2.addEventListener('click', () => {
    container2.style.border = "2px solid #e9efef";
    body.style.background = "url('/bg2.jpg')no-repeat center  center/cover";
    b2 = 1;
});

container3.addEventListener('click', () => {
    container3.style.border = "2px solid #e9efef";
    body.style.background = "url('/bg3.jpg') no-repeat center center/cover";
    b3 = 1;
});

container4.addEventListener('click', () => {
    container4.style.border = "2px solid #e9efef";
    body.style.background = "url('/bg4.jpg')no-repeat center center/cover";
    b4 = 1;
});

container5.addEventListener('click', () => {
    container5.style.border = "2px solid #e9efef";
    body.style.background = "url('/bg5.jpg')no-repeat center center/cover";
    b5 = 1;
});