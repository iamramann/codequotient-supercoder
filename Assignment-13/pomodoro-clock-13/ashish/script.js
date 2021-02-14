var subcontainer1 = document.getElementById("subcontainer-1");
var h1 = document.getElementById("h1");
var session = document.getElementById("session");
var wrkTime = document.getElementById("wrkTime");
console.log(wrkTime.textContent);
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var brkTime = document.getElementById("brkTime");
console.log(brkTime.textContent);
var plus1 = document.getElementById("plus1");
var minus1 = document.getElementById("minus1");
var startPause = document.getElementById("startPause");
var reset = document.getElementById("reset");
var breakTimeValue = parseInt(brkTime.textContent);
var workTimeValue = parseInt(wrkTime.textContent);
var value, pointer;
var seconds = 0;
var minute = 0;
var t,
  wTime = 0,
  bTime = 0;

function timer() {
	console.log(workTimeValue)
	console.log(wTime)
	//if wtime !0 use this loop
  if (workTimeValue != 0) {
		
		console.log("here")
    minute = workTimeValue;
    workTimeValue = 0;
    session.style.color = "royalblue";
    h1.style.color = "royalblue";
    session.innerHTML = "Work Time";
  }
	
	console.log(time,11)
  --wTime;
  --time;

//if wtime ==0 or less use this
  if (wTime <= 0) {
    if (breakTimeValue != 0) {
      minute = breakTimeValue;
      breakTimeValue = 0;
      session.style.color = "orange";
      h1.style.color = "orange";
      session.innerHTML = "Break Time";
    }
  }
	
	
  seconds = minute * 60 + seconds;
	console.log(seconds)
  --seconds;
	
	
  if (seconds >= 0) {
    minute = parseInt(seconds / 60);
    seconds = seconds % 60;
    h1.innerHTML = minute + ":" + seconds;
  }

  showTime();

  if (time <= 0) {
    resetFun();
    clearTimeout(t);
  }
}

function showTime() {
  t = setTimeout(timer, 10);
}

function enableDisable(choice) {
  plus.disabled = choice;
  minus.disabled = choice;
  plus1.disabled = choice;
  minus1.disabled = choice;
}

function resetFun() {
  enableDisable(false);
  clearTimeout(t);
  h1.innerHTML = "MM:SS";
  wrkTime.innerHTML = "00 min";
  brkTime.innerHTML = "00 min";
  startPause.innerHTML = "Start";
  session.innerHTML = "Session";
  session.style.color = "black";
  h1.style.color = "black";
  (minute = 0), (seconds = 0), (workTimeValue = 0), (breakTimeValue = 0);
}

//* INCREMENT AND DECREMENT OPERATIONS PERFORM BY BELOW CODE
function decrement(value, pointer, count) {
  if (value > 0) {
    value -= count;
    pointer.innerHTML = value + " min";
  }
  return value;
}

function increment(value, pointer, count) {
  if (value < 60) {
    value += count;
    pointer.innerHTML = value + " min";
  }
  return value;
}

startPause.addEventListener("click", function () {
  var start = startPause.innerHTML;
	console.log(start,"here")
  time = wTime + bTime;
  if (time >= 0) {
    if (start == "Start") {
      startPause.innerHTML = "Pause";
      enableDisable(true);
      showTime();
    }
    if (start == "Pause") {
      enableDisable(false);
      clearTimeout(t);
      startPause.innerHTML = "Start";
    }
  }
});

//* FUNCTION TO PERFORM RESET OPERATION
reset.addEventListener("click", resetFun);

minus1.addEventListener("click", function () {
  breakTimeValue = decrement(breakTimeValue, brkTime, 1);
  bTime = breakTimeValue * 60;
});

plus1.addEventListener("click", function () {
  breakTimeValue = increment(breakTimeValue, brkTime, 1);
  bTime = breakTimeValue * 60;
});

minus.addEventListener("click", function () {
  workTimeValue = decrement(workTimeValue, wrkTime, 5);
  wTime = workTimeValue * 60;
});

plus.addEventListener("click", function () {
  workTimeValue = increment(workTimeValue, wrkTime, 5);
  wTime = workTimeValue * 60;
});
