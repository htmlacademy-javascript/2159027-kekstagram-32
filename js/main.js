import { renderGallery } from './gallery.js';
import { showAlert } from './util.js';
import {setUserFormSubmit, hideFormModal} from './upload-form.js';
import {getData} from './api.js';
import './message.js';

getData()
  .then((photos) => {
    renderGallery(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(hideFormModal);
