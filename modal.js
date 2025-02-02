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
const modalbg_conf = document.querySelector('.confirmation-block');
const modalBtn_conf = document.querySelector('#end-form');
const form = document.querySelector('#signup');
const formData = document.querySelectorAll('.formData');

//*stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
const emailRegex =
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;

const numberRegex = [0 - 9];

const toggleHidden = (element) => element.classList.toggle('hidden');
const toggleInvisible = (element) => element.classList.toggle('invisible');

let validation_score = 0;
let radio_check = 0;
let TOS_check = 0;

//toggle modal event
modalBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    toggleHidden(modalbg);
    if (form.classList.contains('invisible')) {
      form.classList.remove('invisible');
    }
    if (!modalbg_conf.classList.contains('hidden')) {
      modalbg_conf.classList.add('hidden');
    }
    form.reset();
  })
);

modalBtn_conf.addEventListener('click', () => {
  toggleHidden(modalbg);
  if (form.classList.contains('invisible')) {
    form.classList.remove('invisible');
  }
  if (!modalbg_conf.classList.contains('hidden')) {
    modalbg_conf.classList.add('hidden');
  }
  form.reset();
});

//validity check function
const validitycheck = (inputElement) => {
  inputElement.setCustomValidity('');
  if (inputElement.name === 'first') {
    if (inputElement.value.trim().length < 2) {
      formData[0].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[0].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'last') {
    if (inputElement.value.trim().length < 2) {
      formData[1].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[1].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'email') {
    if (
      inputElement.value.trim().length < 2 ||
      emailRegex.test(inputElement.value) === false
    ) {
      formData[2].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[2].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'birthdate') {
    if (inputElement.value.trim().length < 8) {
      formData[3].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[3].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'quantity') {
    if (
      typeof inputElement === 'number' ||
      inputElement.value.trim().length < 1
    ) {
      formData[4].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[4].setAttribute('data-error-visible', 'false');
    validation_score++;
  }

  if (inputElement.name === 'location') {
    if (inputElement.checked === false) {
      if (radio_check !== 0) return;
      formData[5].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[5].setAttribute('data-error-visible', 'false');
    radio_check++;
    validation_score++;
  }

  if (inputElement.name === 'TOScheckbox') {
    if (inputElement.checked === false) {
      if (TOS_check !== 0) return;
      formData[6].setAttribute('data-error-visible', 'true');
      return;
    }
    formData[6].setAttribute('data-error-visible', 'false');
    TOS_check++;
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
  radio_check = 0;
  TOS_check = 0;
  Array.from(event.currentTarget).forEach(validitycheck);
  if (validation_score !== 7) {
    return;
  } else {
    toggleInvisible(form);
    toggleHidden(modalbg_conf);
  }
});
