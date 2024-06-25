const getLengthString = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

getLengthString('Hello,JavaScript!', 2);


const palindrom = (string) => {
  const checkString = '';
  let trimString = checkString.toLowerCase().replaceAll();
  for (let i = trimString.length - 1; i >= 0; i--) {
    trimString += string[i];
  }
  return trimString === checkString;
};

palindrom('Лёша на полке клопа нашёл ');

