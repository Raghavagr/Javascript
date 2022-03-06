`use strict`;

console.log("practicing playing with classes");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    console.log('showing the box');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    console.log('hidding the box');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    console.log('trying to close box with key');

    if(e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
