import {getRandomPositiveInteger, getRandomArrayElement, getCommentIdGenerator} from './util.js';

const PHOTO_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;

const NAMES_AUTORS_PHOTOS = ['Анна','Эльвира','Константин','Рафаэль','Эльза','Якоб','Тамерлан','Анастасия'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_DESCRIPTIONS = [
  'Снято с любовью.',
  'На прогулке.',
  'С друзьями.',
  'Замечательный вечер!',
  'Закат прекрасен!',
  'Незабываемые выходные!'
];

const getCommentId = getCommentIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomPositiveInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT)},
  () => getRandomArrayElement(MESSAGES)
).join(' ');

const createComment = () => ({
  id: getCommentId(),
  avatar:`img/avatar-${getRandomPositiveInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES_AUTORS_PHOTOS),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
  likes: getRandomPositiveInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomPositiveInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)}, createComment)
});

const getPhoto = () => Array.from(
  { length: PHOTO_COUNT },
  (_, index) => createPhoto(index + 1)
);

export {getPhoto};

