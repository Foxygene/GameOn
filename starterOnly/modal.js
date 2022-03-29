function editNav() {
  const x = document.querySelector('#myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn, .close');
const formData = document.querySelectorAll('.formData');

// toggle modal form
const toggleHidden = (element) => element.classList.toggle('hidden');

//toggle modal event
modalBtn.forEach((btn) =>
  btn.addEventListener('click', () => toggleHidden(modalbg))
);
