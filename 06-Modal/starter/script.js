'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
// const escapeKey = document.

function closeModalOverlay() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModalOverlay);
overlay.addEventListener('click', closeModalOverlay);

document.addEventListener('keydown', function (btn) {
  if (btn.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModalOverlay();
});
