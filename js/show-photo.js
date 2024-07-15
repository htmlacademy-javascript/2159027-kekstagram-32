import {getPhoto} from './data.js';

getPhoto();

const userPhotoList = document.querySelector('.pictures');
const miniaturePhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const userPhotoItems = getPhoto();

userPhotoItems.forEach((miniature) => {
  const similarMiniatureElement = miniaturePhotoTemplate.cloneNode(true);
  similarMiniatureElement.querySelector('.picture__img').src = miniature.url;
  similarMiniatureElement.querySelector('.picture__img').alt = miniature.description;
  similarMiniatureElement.querySelector('.picture__likes').textContent = miniature.likes;
  similarMiniatureElement.querySelector('.picture__comments').textContent = miniature.comments.length;
  userPhotoList.appendChild(similarMiniatureElement);
});

