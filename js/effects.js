const sliderElement = document.querySelector('.effect-level__slider');
const effectsListElement = document.querySelector('.effects__list');

let sliderValue = 0;

const EFFECTS = new Map([
  ['effect-none', {range: {min: 0, max: 1}, start: 0, step: 0.1, connect:'lower'}],
  ['effect-chrome', {range: {min: 0, max: 1}, start: 0, step: 0.1, connect:'lower'}],
  ['effect-sepia', {range: {min: 0, max: 1}, start: 0, step: 0.1, connect:'lower'}],
  ['effect-marvin', {range: {min: 0, max: 100}, start: 0, step: 1, connect:'lower'}],
  ['effect-phobos', {range: {min: 0, max: 3}, start: 0, step: 0.1, connect:'lower'}],
  ['effect-heat', {range: {min: 0, max: 3}, start: 0, step: 0.1, connect:'lower'}]
]);

effectsListElement.addEventListener('click', (evt) => {
  const effectsItemElement = evt.target.closest('.effects__radio');
  if(!effectsItemElement) {
    return;
  }
  console.log('hello');

  sliderElement.noUiSlider.updateOptions(EFFECTS.get(effectsItemElement.id));

});


noUiSlider.create(sliderElement, EFFECTS.get('effect-none'));

sliderElement.noUiSlider.on('update', () => {
  sliderValue = sliderElement.noUiSlider.get();
  console.log(sliderValue);
});
