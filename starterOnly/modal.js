function editNav() {
  const x = document.querySelector('#myTopnav');
  if (x === null) return;
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn, .close');
const form = document.querySelector('#signup');
const formData = document.querySelectorAll('.formData');

const toggleHidden = (element) => element.classList.toggle('hidden');

//toggle modal event
modalBtn.forEach((btn) =>
  btn.addEventListener('click', () => toggleHidden(modalbg))
);

//validity check function
const validitycheck = (inputElement) => {
  inputElement.setCustomValidity('');

  if (inputElement.name === 'first' || inputElement.name === 'last') {
    if (inputElement.validity.valueMissing || inputElement.validity.tooShort) {
      inputElement.setCustomValidity(
        'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
      );
      inputElement.classList.add('invalid');
      return;
    }
    inputElement.classList.remove('invalid');
  }

  if (inputElement.name === 'email') {
    if (
      inputElement.validity.valueMissing ||
      inputElement.validity.typeMismatch
    ) {
      inputElement.setCustomValidity(
        'Veuillez entrer une adresse mail valide.'
      );
      inputElement.classList.add('invalid');
      return;
    }
    inputElement.classList.remove('invalid');
  }

  if (inputElement.name === 'birthdate') {
    if (
      inputElement.validity.typeMismatch ||
      inputElement.validity.valueMissing
    ) {
      inputElement.setCustomValidity(
        'Vous devez entrer votre date de naissance.'
      );
      inputElement.classList.add('invalid');
      return;
    }
    inputElement.classList.remove('invalid');
  }

  if (inputElement.name === 'quantity') {
    if (
      inputElement.validity.typeMismatch ||
      inputElement.validity.valueMissing
    ) {
      inputElement.setCustomValidity('Veuillez entrer un nombre.');
      inputElement.classList.add('invalid');
      return;
    }
    inputElement.classList.remove('invalid');
  }

  if (inputElement.name === 'quantity') {
    if (
      inputElement.validity.typeMismatch ||
      inputElement.validity.valueMissing
    ) {
      inputElement.setCustomValidity('Veuillez entrer un nombre.');
      inputElement.classList.add('invalid');
      return;
    }
    inputElement.classList.remove('invalid');
  }

  if (inputElement.name === 'loctation') {
    if (inputElement.validity.valueMissing) {
      inputElement.setCustomValidity('Vous devez choisir une option.');
      inputElement.classList.add('invalid');
      return;
    }
    inputElement.classList.remove('invalid');
  }

  if (inputElement.name === 'TOScheckbox') {
    if (inputElement.validity.valueMissing) {
      inputElement.setCustomValidity(
        'Vous devez vérifier que vous acceptez les termes et conditions.'
      );
      inputElement.classList.add('invalid');
      return;
    }
    inputElement.classList.remove('invalid');
  }
};

Array.from(form).forEach((formElement) => {
  formElement.addEventListener('change', (event) => {
    validitycheck(event.currentTarget);
  });
  formElement.addEventListener('invalid', (event) => {
    validitycheck(event.currentTarget);
  });
});

form?.addEventListener('submit', (event) => {
  Array.from(event.currentTarget).forEach(validitycheck);
  event.preventDefault();
  console.log('form sent');
});
