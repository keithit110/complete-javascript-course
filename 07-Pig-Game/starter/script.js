'use strict';

const playerScore = [
  document.querySelector('#score--0'),
  document.getElementById('score--1'),
];
const currentScore = [
  document.getElementById('current--0'),
  document.getElementById('current--1'),
];
const player = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];
const finalScore = [0, 0];
const diceImg = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
let playerActive = 0;
let rollScore = [0, 0];
let playing = true; //boolean to disable the buttons logic
playerScore[0].textContent = 0;
playerScore[1].textContent = 0;
diceImg.classList.add('hidden');

//gets the random number for the dice roll
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// this is called when player rolls a 1
function resetActivePlayer() {
  for (let i = 0; i < player.length; i++) {
    if (player[i].classList.contains('player--active')) {
      player[i].classList.remove('player--active');
    }
    rollScore[playerActive] = 0;
  }
  currentScore[playerActive].textContent = 0;
  playerActive = playerActive === 0 ? 1 : 0; //switch active player
  player[playerActive].classList.add('player--active');
}

//this is called when player rolls the dice (presses the "ROLL DICE" button)
function startRoll() {
  let randNum = getRandomInt(1, 6);
  //   console.log(randNum);
  diceImg.src = 'dice-' + randNum + '.png';
  if (randNum === 1) {
    resetActivePlayer();
  } else {
    diceImg.classList.remove('hidden');
    rollScore[playerActive] += randNum;
    currentScore[playerActive].textContent = rollScore[playerActive];
  }
}

//this is called when user wants to hold his current score so it will be added to the final score array which then is loaded to the player score array
function holdScore_f() {
  finalScore[playerActive] += rollScore[playerActive];
  playerScore[playerActive].textContent = finalScore[playerActive];
  if (Number(playerScore[playerActive].textContent) >= 100) {
    document
      .querySelector('.player--' + playerActive)
      .classList.add('player--winner');
    playing = false;
    diceImg.classList.add('hidden');
    return;
  }
  resetActivePlayer();
}

//roll dice button click
rollDiceBtn.addEventListener('click', function () {
  if (playing) startRoll();
});

//hold button clock
holdBtn.addEventListener('click', function () {
  if (playing) holdScore_f();
});

//new game button click
newGameBtn.addEventListener('click', function () {
  for (let i = 0; i < finalScore.length; i++) {
    if (Number(playerScore[i].textContent) >= 100) {
      player[i].classList.remove('player--winner');
    }
    finalScore[i] = 0;
    playerScore[i].textContent = 0;
    rollScore[i] = 0;
    currentScore[i].textContent = 0;
  }
  player[playerActive].classList.toggle('player--active');
  playerActive = 0;
  player[playerActive].classList.toggle('player--active');
  diceImg.classList.add('hidden');
  playing = true;
  if (rollDiceBtn.disabled) rollDiceBtn.disabled = false;
  if (holdBtn.disabled) holdBtn.disabled = false;
});

//functionality for keyboard controls. Good for 2nd player use (Keith's modification)
document.addEventListener('keyup', function (btn) {
  //   console.log(btn);
  if (playing) {
    if (btn.key === 'r') {
      startRoll();
    } else if (btn.key === 'h') {
      holdScore_f();
    }
  }
});
