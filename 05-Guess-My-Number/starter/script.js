'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct number!'

// console.log(document.querySelector('.score').textContent);

// document.querySelector('.label-highscore').textContent = '🥇 Highest Score:'

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let correctNumber = getRandomInt(1, 20);
// console.log(correctNumber);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let numb = Number(document.querySelector('.guess').value);
  // console.log(numb);

  if (numb > 20 || numb < 1) {
    document.querySelector('.message').textContent = '⛔ Only numbers 1-20!';
  } else if (numb === correctNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = correctNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (numb < correctNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆 Higher Number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (numb > correctNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Lower Number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
