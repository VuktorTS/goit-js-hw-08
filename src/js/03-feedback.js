import _ from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const keyStorage = 'feedback-form-state';

const locStorage = {
  getSrotage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

form.addEventListener('input', _(formHandler, 500));
form.addEventListener('submit', onSubmit);

function formHandler(event) {
  const formValue = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  locStorage.setStorage(keyStorage, formValue);
}

function onSubmit(event) {
  event.preventDefault();

  const data = locStorage.getSrotage(keyStorage);

  if (data) {
    console.log(data);
    form.elements.email.value = '';
    form.elements.message.value = '';
    localStorage.clear(keyStorage);
  }
}

function fillingForms(data) {
  if (data) {
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
  }
}

fillingForms(locStorage.getSrotage(keyStorage));
