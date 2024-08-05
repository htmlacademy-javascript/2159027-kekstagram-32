const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  const randomIndex = getRandomPositiveInteger(0, elements.length - 1);
  return elements[randomIndex];
};

const getCommentIdGenerator = () => {
  let commentId = 1;

  return () => commentId++;
};

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const showAlert = (message) => {
  const alertContainer = dataErrorTemplate.cloneNode(true);
  document.body.append(alertContainer);
  alertContainer.textContent = message;

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomArrayElement,
  getCommentIdGenerator,
  getRandomPositiveInteger,
  isEscapeKey,
  showAlert,
};
