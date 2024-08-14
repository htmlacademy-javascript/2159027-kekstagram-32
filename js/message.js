import {isEscapeKey} from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const showMessage = (messageElement, buttonSelector) => {
  body.append(messageElement);
  body.addEventListener('keydown', onEscKeyDown);
  body.addEventListener('click', onBodyClick);
  messageElement
    .querySelector(buttonSelector)
    .addEventListener('click', onDeleteMessage);
};

const showSuccessMessage = () => {
  showMessage(successMessage, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMessage, '.error__button');
};

function onDeleteMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error') ;
  messageElement.remove();
  body.removeEventListener('keydown', onEscKeyDown);
  body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
  if (
    evt.target.closest('.success__inner') ||
    evt.target.closest('.error__inner')
  ) {
    return;
  }
  onDeleteMessage();
}

function onEscKeyDown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    evt.stopPropagation();
    onDeleteMessage();
  }
}

export {showSuccessMessage, showErrorMessage};
