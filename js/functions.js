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
console.log(checkTimeMeeting('08:00', '17:30', '14:00', 90)); // true
console.log(checkTimeMeeting('8:0', '10:0', '8:0', 120)); // true
console.log(checkTimeMeeting('08:00', '14:30', '14:00', 90)); // false
console.log(checkTimeMeeting('14:00', '17:30', '08:0', 90)); // false
console.log(checkTimeMeeting('8:00', '17:30', '08:00', 900)); // false
