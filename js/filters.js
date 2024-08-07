import { debounce } from './util.js';

const PHOTO_COUNT = 10;
const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
const filterPhotoElement = document.querySelector('.img-filters');

let currentFilter = Filters.DEFAULT;

const setOnFilterClick = (render, photos) => {
  filterPhotoElement.classList.remove('img-filters--inactive');
  filterPhotoElement.addEventListener('click', debounce((evt) => {
    const filterPhotoItem = evt.target.closest('.img-filters__button');
    if(!filterPhotoItem) {
      return;
    }

    if(currentFilter === filterPhotoItem.id) {
      return;
    }

    resetActiveButton(currentFilter,filterPhotoItem.id);
    currentFilter = filterPhotoItem.id;

    switch (currentFilter) {
      case Filters.DISCUSSED:
        render(photos.slice().sort(comparePhotoByComments));
        break;
      case Filters.RANDOM:
        render(photos.slice().sort(comparePhotoRandom).slice(0, PHOTO_COUNT));
        break;
      case Filters.DEFAULT:
        render(photos);
        break;
    }
  }));
};

const buttons = Array.from(document.querySelectorAll('.img-filters__button'));

function resetActiveButton (currentButtonId, newButtonId) {
  const currentButtonElement = buttons.find((x) => x.id === currentButtonId);
  currentButtonElement.classList.remove('img-filters__button--active');

  const newButtonElement = buttons.find((x) => x.id === newButtonId);
  newButtonElement.classList.add('img-filters__button--active');
}


function comparePhotoByComments(a, b) {
  return b.comments.length - a.comments.length;
}

function comparePhotoRandom() {
  return Math.random() - 0.5;
}

export {setOnFilterClick};
