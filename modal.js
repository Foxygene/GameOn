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
const modalbg_f = document.querySelector('.bground-f');
const modalBtn = document.querySelectorAll('.modal-btn, .close');
const modalBtn_f = document.querySelectorAll('.modal-btn-f, .close-f');
const form = document.querySelector('#signup');
const formData = document.querySelectorAll('.formData');

const toggleHidden = (element) => element.classList.toggle('hidden');

let validation_score = 0;

//toggle modal event
modalBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    toggleHidden(modalbg);
    form.reset();
  })
);

modalBtn_f.forEach((btn) =>
  btn.addEventListener('click', () => toggleHidden(modalbg_f))
);

//validity check function
const validitycheck = (inputElement) => {
  inputElement.setCustomValidity('');
  // console.log(inputElement);
  if (inputElement.name === 'first') {
    if (inputElement.validity.valueMissing || inputElement.validity.tooShort) {
      formData[0].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[0].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'last') {
    if (inputElement.validity.valueMissing || inputElement.validity.tooShort) {
      formData[1].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[1].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'email') {
    if (
      inputElement.validity.valueMissing ||
      inputElement.validity.typeMismatch
    ) {
      formData[2].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[2].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'birthdate') {
    if (
      inputElement.validity.typeMismatch ||
      inputElement.validity.valueMissing
    ) {
      formData[3].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[3].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'quantity') {
    console.log(inputElement);
    if (
      inputElement.validity.typeMismatch ||
      inputElement.validity.valueMissing
    ) {
      formData[4].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[4].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'location') {
    if (inputElement.validity.valueMissing) {
      formData[5].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[5].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'TOScheckbox') {
    if (inputElement.validity.valueMissing) {
      formData[6].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[6].setAttribute('data-error-visible', 'false');
    validation_score++;
  }
};

Array.from(form).forEach((formElement) => {
  formElement.addEventListener('submit', (event) => {
    validitycheck(event.currentTarget);
  });
  formElement.addEventListener('invalid', (event) => {
    validitycheck(event.currentTarget);
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  validation_score = 0;
  Array.from(event.currentTarget).forEach(validitycheck);
  if (validation_score !== 12) {
    console.log(validation_score);
    return;
  } else {
    toggleHidden(modalbg);
  }
  console.log(validation_score);
  console.log('form sent');
  toggleHidden(modalbg_f);
  form.reset();
});
