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
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let score = Number(document.querySelector('.score').textContent);
  let numb = Number(document.querySelector('.guess').value);
  // console.log(numb);

  //check if values inputted is correct
  if (numb > 20 || numb < 1) {
    document.querySelector('.message').textContent = '⛔ Only numbers 1-20!';

    //winner if block
  } else if (numb === correctNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '35rem';
    document.querySelector('.check').disabled = true;

    document.querySelector('.number').textContent = correctNumber;

    //highscore logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //number lower than correct number
  } else if (numb < correctNumber) {
    //number of retries or score
    if (score > 1) {
      document.querySelector('.message').textContent = '👆 Higher Number!';
      score--;
      document.querySelector('.score').textContent = score;

      //logic if number of retries goes to 0
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    //number greater than correct number
  } else if (numb > correctNumber) {
    //number of retries or score
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Lower Number!';
      score--;
      document.querySelector('.score').textContent = score;

      //logic if number of retries goes to 0
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  correctNumber = getRandomInt(1, 20);
  document.querySelector('.check').disabled = false;
});
