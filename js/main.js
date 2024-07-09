const PHOTO_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;


const NAMES_AUTORS_PHOTOS = ['Анна','Эльвира','Константин','Рафаэль','Эльза','Якоб','Тамерлан','Анастасия'];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_DESCRIPTION = [
  'Снято с любовью.',
  'На прогулке.',
  'С друзьями.',
  'Замечательный вечер!',
  'Закат прекрасен!',
  'Незабываемые выходные!'
];

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  const randomIndex = getRandomPositiveInteger(0, elements.length - 1);
  return elements[randomIndex];
};

const getCommentIdGenerator = () => {
  let commentId = 1;

  return () => commentId++;
};

const getCommentId = getCommentIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomPositiveInteger(1, 2)},
  () => getRandomArrayElement(MESSAGE)
).join(' ');

const createComment = () => ({
  id: getCommentId(),
  avatar:`img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES_AUTORS_PHOTOS),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTION),
  likes: getRandomPositiveInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomPositiveInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)}, createComment)
});

const getPhoto = Array.from(
  {length: PHOTO_COUNT},
  (_, index) => createPhoto(index + 1)
);

console.log(getPhoto);
