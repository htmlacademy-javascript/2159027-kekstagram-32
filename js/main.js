import {getPhoto} from './data.js';
import {generateThumbnailItems} from './thumbnail.js';
import {initUserModal} from './user-modal.js';

const photos = getPhoto();
generateThumbnailItems(photos);
initUserModal(photos);
