function getCurrentDateAndTime() {
  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THRUSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  var today = new Date();
  var day = today.getDate();
  var dayName = days[today.getDay() - 1];
  var month = months[today.getMonth()];
  var year = today.getFullYear();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var myDate = {
    day: day,
    month: month,
    year: year,
    hour: hour,
    minutes: minutes,
    seconds: seconds,
    dayName: dayName,
  };
  return myDate;
}

export { getCurrentDateAndTime };
