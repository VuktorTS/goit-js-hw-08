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
  const bd = locStorage.getSrotage(keyStorage);

  if (bd) {
    console.log(bd);
    form.elements.email.value = '';
    form.elements.message.value = '';
    localStorage.clear(keyStorage);
  }
}
function fillingForms(bd) {
  if (bd) {
    form.elements.email.value = bd.email;
    form.elements.message.value = bd.message;
  }
}
fillingForms(locStorage.getSrotage(keyStorage));
