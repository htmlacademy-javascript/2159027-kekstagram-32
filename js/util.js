const ALERT_SHOW_TIME = 5000;
const TIMEOUT_DELAY = 500;

const isEscapeKey = (evt) => evt.key === 'Escape';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const showAlert = (message) => {
  const alertContainer = dataErrorTemplate.cloneNode(true);
  document.body.append(alertContainer);
  alertContainer.textContent = message;

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function debounce(callback, timeoutDelay = TIMEOUT_DELAY) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  isEscapeKey,
  showAlert,
  debounce
};
