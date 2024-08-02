const sliderElement = document.querySelector('.effect-level__slider');
const effectsListElement = document.querySelector('.effects__list');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const sliderElementValue = document.querySelector('.effect-level__value');
const photoElement = document.querySelector('.img-upload__preview img');

const EFFECTS = {
  DEFAULT: 'effect-none',
  CHROME: 'effect-chrome',
  SEPIA: 'effect-sepia',
  MARVIN: 'effect-marvin',
  PHOBOS: 'effect-phobos',
  HEAT: 'effect-heat',
};

const FILTERS = {
  [EFFECTS.DEFAULT]: {
    style: '',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  [EFFECTS.CHROME]: {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  [EFFECTS.SEPIA]: {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  [EFFECTS.MARVIN]: {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  [EFFECTS.PHOBOS]: {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  [EFFECTS.HEAT]: {
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

const createSlider = ({min, max, step}) => {
  noUiSlider.create(sliderElement, {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
};

let chosenEffect = EFFECTS.DEFAULT;
let currentSliderValue = FILTERS[EFFECTS.DEFAULT].max;

const setEffect = () => {
  const filter = FILTERS[chosenEffect];

  if(chosenEffect === EFFECTS.DEFAULT) {
    photoElement.style.filter = '';
    sliderContainerElement.classList.add('hidden');
  } else{
    photoElement.style.filter = `${filter.style}(${currentSliderValue}${filter.unit})`;
    sliderContainerElement.classList.remove('hidden');
  }
};

const onSliderUpdate = () => {
  if (chosenEffect === EFFECTS.DEFAULT) {
    return;
  }
  currentSliderValue = sliderElement.noUiSlider.get();
  setEffect();
  sliderElementValue.value = currentSliderValue;
};

createSlider({min: FILTERS[EFFECTS.DEFAULT].min, max: FILTERS[EFFECTS.DEFAULT].max, step: FILTERS[EFFECTS.DEFAULT].step});
sliderElementValue.value = '';
setEffect();
sliderElement.noUiSlider.on('update', onSliderUpdate);

effectsListElement.addEventListener('click', (evt) => {
  const effectsItemElement = evt.target.closest('.effects__radio');
  if(!effectsItemElement) {
    return;
  }

  chosenEffect = effectsItemElement.id;
  setEffect();

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: FILTERS[chosenEffect].min,
      max: FILTERS[chosenEffect].max,
    },
    step: FILTERS[chosenEffect].step,
    start: FILTERS[chosenEffect].max,
  });
});

const resetEffects = () => {
  chosenEffect = EFFECTS.DEFAULT;
  sliderElementValue.value = '';
  currentSliderValue = FILTERS[EFFECTS.DEFAULT].max;
  setEffect();
};

export {resetEffects};
