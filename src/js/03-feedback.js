import _ from 'lodash.throttle';
import { saveStorage, loadStorage, removeStorage } from './helper/storage';

const form = document.querySelector('.feedback-form');
const KEY_STORAGE = 'feedback-form-state';

// const locStorage = {
//   getSrotage(key) {
//     return JSON.parse(localStorage.getItem(key));
//   },
//   setStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   },
// };

form.addEventListener('input', _(formHandler, 500));
form.addEventListener('submit', onSubmit);

function formHandler(event) {
  const formValue = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  saveStorage(KEY_STORAGE, formValue);
}

function onSubmit(event) {
  event.preventDefault();

  const data = loadStorage(KEY_STORAGE);

  if (data) {
    console.log(data);
    form.elements.email.value = '';
    form.elements.message.value = '';
    removeStorage(KEY_STORAGE);
  }
}

function fillingForms(data) {
  if (data) {
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
  }
}

fillingForms(loadStorage(KEY_STORAGE));
