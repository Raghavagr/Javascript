`use strict`;

let secretNumber = (Math.trunc(Math.random() * 100)+1);
//let score = 100;
let chance = 10
let highscore = 100;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        displayMessage('⛔️ No number!');
    }

    else if(guess == secretNumber) {
        displayMessage('🎉 correct Number!');

        document.querySelector('.number').textContent = secretNumber;
        // change the style of body and number on correct prediction
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // display score
        if(chance >= 1) {
            //highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
        /*
        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
        */
    }
    // when guess is wrong
    else if(guess != secretNumber) {
        if(chance > 1) {
            let msg = guess > secretNumber ? '📈 Too High!' : '📉 Too Low';
            displayMessage(msg);
            chance--;
            highscore = highscore - 10;
            //document.querySelector('.score').textContent = score;
            document.querySelector('.chance').textContent = chance;
        }
        else {
            displayMessage('💥 You lost the game! Better Luck Next Time');
            console.log("Better Luck Next Time!");
            //document.querySelector('.score').textContent = 0;
            document.querySelector('.chance').textContent = 0;
            document.querySelector('.highscore').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    chance = 10;
    highscore = 100;

    // set the screen text as original before start game
    displayMessage('Start Guessing...')
    document.querySelector('.number').textContent = "?";
    document.querySelector('.chance').textContent = chance;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.guess').value = '';

    // change style
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})