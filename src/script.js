'use strict';

// generate random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //intially score is 20
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number !';
    displayMessage('No Number !');
  } else if (guess === secretNumber) {
    // when player wins.............
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = secretNumber;
    // manipulating css
    document.querySelector('body').style.backgroundColor = 'crimson';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    // dry principle solution
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high!' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game!';
      displayMessage('You Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
  });
});
