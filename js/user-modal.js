import {isEscapeKey} from './util.js';

const bodyElement = document.querySelector('body');

/** Элемент модального окна для полноэкранного просмотра изображения */
const userModalElement = document.querySelector('.big-picture');
/**  Элемент изображения в модальном окне */
const userModalOpenElement = userModalElement.querySelector('.big-picture__img img');
/** Кнопка для выхода из модального окна */
const userModalCloseButton = userModalElement.querySelector('.big-picture__cancel');

/** Кнопка "Загрузить ещё" в модальном окне */
const buttonLoadNextComment = userModalElement.querySelector('.comments-loader');
/** Элемент с текстом количества показанных комментариев в модальном окне */
const showCommentCountElement = userModalElement.querySelector('.social__comment-shown-count');
/** Элемент с текстом общего количества комментариев в модальном окне */
const allCommentsElement = userModalElement.querySelector('.social__comment-total-count');
/** Элемент с числом количества лайков в модальном окне */
const likesCountElement = userModalElement.querySelector('.likes-count');
/** Элемент с текстом описания к фотографии в модальном окне */
const descriptionsUserModalElement = userModalElement.querySelector('.social__caption');
/** Элемент списка комментариев */
const commentListElement = document.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

/** Количество "загружаемых" комментариев по нажатию кнопки "Загрузить ещё"*/
const SHOW_COMMENT_COUNT = 5;
/** Количество "загруженных" комментариев */
let loadedCommentsCount = 0;
let comments = [];

const onWindowKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const createNewCommentElement = ({avatar, name, message}) => {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = (items) => {

  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const newCommentElement = createNewCommentElement(item);
    fragment.append(newCommentElement);
  });

  commentListElement.append(fragment);
};

const renderPhotoDetails = ({url, likes, description}) => {
  userModalOpenElement.src = url;
  userModalOpenElement.alt = description;
  likesCountElement.textContent = likes;
  descriptionsUserModalElement.textContent = description;
  allCommentsElement.textContent = comments.length;
};

/** Загрузить следующие комментарии */
const onLoadNextComments = () => {
  // Определим номер крайнийнего комментария, который собираемся "загрузить" с проверкой на переполнение
  let nextLoadedCommentsCount = loadedCommentsCount + SHOW_COMMENT_COUNT;

  if(nextLoadedCommentsCount >= comments.length) {
    nextLoadedCommentsCount = comments.length;

    // Скроем кнопку "Загрузить ещё", если количество загруженных равно количеству всех комментариев
    buttonLoadNextComment.classList.add('hidden');
  } else {
    buttonLoadNextComment.classList.remove('hidden');
  }

  // Отрисуем следующие по порядку элементы
  renderComments(comments.slice(loadedCommentsCount, nextLoadedCommentsCount));

  // Обновим номер крайнийнего комментария
  loadedCommentsCount = nextLoadedCommentsCount;
  showCommentCountElement.textContent = nextLoadedCommentsCount;
};

const openUserModal = () => {
  bodyElement.classList.add('modal-open');
  userModalElement.classList.remove('hidden');

  document.addEventListener('keydown', onWindowKeydown);
  buttonLoadNextComment.addEventListener('click', onLoadNextComments);

  commentListElement.innerHTML = '';
  loadedCommentsCount = 0;
};

function closeUserModal() {
  bodyElement.classList.remove('modal-open');
  userModalElement.classList.add('hidden');

  document.removeEventListener('keydown', onWindowKeydown);
  buttonLoadNextComment.removeEventListener('click', onLoadNextComments);
  userModalCloseButton.removeEventListener('click', onUserModalCloseButton);
}

function onUserModalCloseButton() {
  // Скрываем модальное окно и, передав тот же обработчик нажатия кнопки "Загрузить ещё", который добавляли, отписываемся от него
  closeUserModal();
}

const initUserModal = (photo) => {
  comments = photo.comments;

  // Показываем модальное окно с переданным обработчиком нажатия кнопки "Загрузить ещё"
  openUserModal();

  // Обновляем информацию о изображении в модальном окне
  renderPhotoDetails(photo);

  // Один раз вызываем эту функицию сами для загрузки первых комментариев, потом будет вызваться по нажатию кнопки
  onLoadNextComments();

  userModalCloseButton.addEventListener('click', onUserModalCloseButton);
};

export {initUserModal};
