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
  var month = today.getMonth();
  var monthName = months[month];
  var year = today.getFullYear();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var myDate = {
    day: day,
    dayName: dayName,
    month: month,
    monthName: monthName,
    year: year,
    hour: hour,
    minutes: minutes,
    seconds: seconds,
  };
  return myDate;
}

export { getCurrentDateAndTime };
