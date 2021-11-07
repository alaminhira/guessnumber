'use strict';
function _(el) {
    return document.querySelector(el);
}

let body = _('body');
let againBtn = _('.again');
let guess = _('.guess');
let checkBtn = _('.check');
let number = _('.number');
let message = _('.message');
let score = _('.score');
let highscore = _('.highscore');

let secretNumber = Math.trunc((Math.random() * 20)) + 1;
let targetedScore = 20
let topScore = 0;

const displayMessage = (el, msg) => { el.textContent = msg; }

const ctrlGame = function() {
    let guessVal = Number(guess.value);
    console.log(secretNumber);

    // When guess is less than or equal to 0
    if (guessVal <= 0) {
        displayMessage(message, '🧧 Not a Valid Number!');

    // When guess is right
} else if (guessVal === secretNumber) {
    body.style.backgroundColor = '#60b347';
    displayMessage(number, secretNumber);
        displayMessage(message, '🎉 Correct Number!');
        topScore = topScore > targetedScore ? topScore : targetedScore;
        displayMessage(highscore, topScore);
        
        // When guess is wrong
    } else if (guessVal !== secretNumber) {
        displayMessage(message, (guessVal > secretNumber ? '🎇 Too high' : '🎄 Too low'));
        targetedScore--;
        displayMessage(score, targetedScore);
    }
}

const init = function() {
    body.style.backgroundColor = '#222';
    guess.value = '';
    targetedScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage(number, '?')
    displayMessage(message, 'Start guessing...!')
    displayMessage(score, targetedScore);
}

checkBtn.addEventListener('click', ctrlGame);
window.addEventListener('load', init);
againBtn.addEventListener('click', init);
