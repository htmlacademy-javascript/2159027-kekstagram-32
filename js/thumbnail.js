const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailList = document.querySelector('.pictures');


const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const generateThumbnailItems = (photos) => {
  const thumbnailFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    thumbnailFragment.append(thumbnail);
  });

  thumbnailList.append(thumbnailFragment);
};

export {generateThumbnailItems};
