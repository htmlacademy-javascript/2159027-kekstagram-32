function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome (string) {
  const cleanString = string.toLowerCase().replaceAll(' ', '');
  let newString = '';

  for (let i = cleanString.length - 1; i >= 0; i--) {
    newString += cleanString[i];
  }

  return cleanString === newString;
}

function getNumber (string) {
  let result = '';

  const newString = string.toString();

  for (let i = 0; i < newString.length; i++) {
    const char = parseInt(newString[i], 10);

    if (!Number.isNaN(char)) {
      result += newString[i];
    }
  }

  if (result === '') {
    return NaN;
  }

  return parseInt(result, 10);
}

checkStringLength('Привет Мир!', 20);
checkStringLength('Привет Мир!', 10);

isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome('Лёша на полке клопа нашёл! ');

getNumber('10 тарелок');
getNumber('Купи 3 килограмма муки');
getNumber('А я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
getNumber('агент 007');

const getTimeMinutes = function (time) {
  const [hour, minutes] = time.split(':');
  const timeInMinutes = 60;

  return hour * timeInMinutes + parseInt(minutes, 10);
};

function checkTimeMeeting (startDay, endDay, startMeeting, durationMeeting) {
  const startDayPerMinutes = getTimeMinutes(startDay);
  const endDayPerMinutes = getTimeMinutes(endDay);
  const startMeetingPerMinutes = getTimeMinutes(startMeeting);

  return startMeetingPerMinutes >= startDayPerMinutes && startMeetingPerMinutes + durationMeeting <= endDayPerMinutes;
}

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
checkTimeMeeting('08:00', '17:30', '14:00', 90); // true
checkTimeMeeting('8:0', '10:0', '8:0', 120); // true
checkTimeMeeting('08:00', '14:30', '14:00', 90); // false
checkTimeMeeting('14:00', '17:30', '08:0', 90); // false
checkTimeMeeting('8:00', '17:30', '08:00', 900); // false
