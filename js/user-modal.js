import {isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.big-picture');

const body = document.querySelector('body');

// const SHOW_COMMENT_COUNT = 2;

const createNewComment = ({avatar, name, message}) => {
  const newComment = document.createElement('li');
  newComment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  newComment.classList.add('social__comment');

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = (comments) => {
  const commentListElement = document.querySelector('.social__comments');
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createNewComment(comment);
    fragment.append(commentElement);
  });

  commentListElement.append(fragment);
};

const renderPhotoDetails = ({url, likes, description}) => {
  const userModalOpenElement = userModalElement.querySelector('.big-picture__img img');
  const likesCount = userModalElement.querySelector('.likes-count');
  const descriptionsUserModalElement = userModalElement.querySelector('.social__caption');

  userModalOpenElement.src = url;
  userModalOpenElement.alt = description;
  likesCount.textContent = likes;
  descriptionsUserModalElement.textContent = description;
};

const onWindowKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
  }
};

const openUserModal = () => {
  body.classList.add('modal-open');
  userModalElement.classList.remove('hidden');

  document.addEventListener('keydown', onWindowKeydown);
};

const closeUserModal = () => {
  body.classList.remove('modal-open');
  userModalElement.classList.add('hidden');

  document.removeEventListener('keydown', onWindowKeydown);
};

const initUserModal = (photos) => {
  const thumbnails = document.querySelector('.pictures');

  thumbnails.addEventListener('click', (evt) => {
    if(evt.target.matches('img')){
      openUserModal();

      const thumbnail = evt.target.closest('.picture');
      const url = evt.target.src;
      const showCommentCount = userModalElement.querySelector('.social__comment-shown-count');
      showCommentCount.textContent = thumbnail.querySelector('.picture__comments').textContent;

      const allComments = userModalElement.querySelector('.social__comment-total-count');
      allComments.textContent = thumbnail.querySelector('.picture__comments').textContent;

      photos.forEach((photo) => {
        if(url.indexOf(photo.url) > -1) {
          renderPhotoDetails(photo);
          renderComments(photo.comments);
        }
      });

      const commentCountElement = userModalElement.querySelector('.social__comment-count');
      commentCountElement.classList.add('hidden');

      const commentsLoadButton = userModalElement.querySelector('.comments-loader');
      commentsLoadButton.classList.add('hidden');
    }
  });

  const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');

  userModalCloseElement.addEventListener('click', () => {
    closeUserModal();
  });
};

export {initUserModal};
