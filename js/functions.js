const getStringLength = (str, maxLength) => str.length <= maxLength;

getStringLength('Hello,JavaScript!', 2);


const isPalindrome = (string) => {
  const cleaned = string.toLowerCase().replaceAll(' ', '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
};


