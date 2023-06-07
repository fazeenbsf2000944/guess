'use strict';
let secretNumber = Math.trunc(Math.random() * 20);

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //no number
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No Number';
    displayMessage('❌ No Number');
  }
  //Correct Number
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✨ Correct Number';
    displayMessage('✨ Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('body').style.backgroundColor = '#60b347';
    backgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //number donot match
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'Game Over';
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0;
      //   document.querySelector('body').style.backgroundColor = 'rgb(190, 13, 13';
      backgroundColor('rgb(190, 13, 13');
    }
  }

  //number is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game Over';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'rgb(190, 13, 13';
  //     }
  //   }

  //   //number is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game Over';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'rgb(190, 13, 13';
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  //   document.querySelector('.message').textContent = 'Start Guessing';
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //   document.querySelector('body').style.backgroundColor = '#222';
  backgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
});
