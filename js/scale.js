const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEFAULT = 100;

const scaleElement = document.querySelector('.scale__control--value');
const buttonSmallerElement = document.querySelector('.scale__control--smaller');
const buttonBiggerElement = document.querySelector('.scale__control--bigger');
const photoElement = document.querySelector('.img-upload__preview img');

const scalePhoto = (value) => {
  photoElement.style.transform = `scale(${value / 100})`;
  scaleElement.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(scaleElement.value, 10);
  scalePhoto(Math.max(currentValue - SCALE_STEP, MIN_SCALE));
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(scaleElement.value, 10);
  scalePhoto(Math.min(currentValue + SCALE_STEP, MAX_SCALE));
};

const resetScale = () => scalePhoto(SCALE_DEFAULT);

buttonSmallerElement.addEventListener('click', onButtonSmallerClick);
buttonBiggerElement.addEventListener('click', onButtonBiggerClick);

export { resetScale };
