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

export {
  getRandomPositiveInteger,
  getRandomArrayElement,
  getCommentIdGenerator
};
