import { renderGallery } from './gallery.js';
import { showAlert } from './util.js';
import { setUserFormSubmit, successHandler } from './upload-form.js';
import { getData } from './api.js';
import { setOnFilterClick } from './filters.js';


await getData()
  .then((photos) => {
    setOnFilterClick(renderGallery, photos);
    renderGallery(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

await setUserFormSubmit(successHandler);
