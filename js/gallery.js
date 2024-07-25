import { generateThumbnailItems } from './thumbnail.js';
import { initUserModal } from './user-modal.js';

const thumbnailList = document.querySelector('.pictures');

const renderGallery = (photos) => {
  thumbnailList.addEventListener('click', (evt) => {

    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if(!thumbnail) {
      return;
    }

    evt.preventDefault();
    const photo = photos.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    initUserModal(photo);
  });

  generateThumbnailItems(photos, thumbnailList);
};

export { renderGallery };
