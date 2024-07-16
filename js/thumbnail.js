import {getPhoto} from './data.js';

getPhoto();

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPhotoItems = getPhoto();

const thumbnailFragment = document.createDocumentFragment();

userPhotoItems.forEach(({url, description, likes, comments}) => {
  const thumbnailList = document.querySelector('.pictures');
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnailFragment.appendChild(thumbnail);
  thumbnailList.appendChild(thumbnailFragment);
});


