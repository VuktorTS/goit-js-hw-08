import _ from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const locStorage = {
  getSrotage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

form.addEventListener('input', _(formHandler, 500));

function formHandler(event) {
  const formValue = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
    
  locStorage.setStorage('feedback-form-state', formValue);
}
