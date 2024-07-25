const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const thumbnailList = document.querySelector('.pictures');

const createThumbnail = ({url, description, likes, comments, id}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const generateThumbnailItems = (photos, thumbnailList) => {
  const thumbnailFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    thumbnailFragment.append(thumbnail);
  });

  thumbnailList.append(thumbnailFragment);
};

export {generateThumbnailItems};
