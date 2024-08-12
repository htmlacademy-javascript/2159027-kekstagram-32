import { renderGallery } from './gallery.js';
import { showAlert, debounce } from './util.js';
import { setUserFormSubmit} from './upload-form.js';
import { getData } from './api.js';
import { setOnFilterClick } from './filters.js';


getData()
  .then((photos) => {
    setOnFilterClick(debounce(renderGallery), photos);
    renderGallery(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit();
