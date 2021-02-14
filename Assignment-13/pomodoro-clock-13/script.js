const showMMSS = document.getElementById("show-time");
const workPlusBtn = document.getElementById("work-plus");
const workMinusBtn = document.getElementById("work-minus");
const breakPlusBtn = document.getElementById("break-plus");
const breakMinusBtn = document.getElementById("break-minus");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
var workTimeDisplayArea = document.getElementById("work-time-here");
var breakTimeDisplayArea = document.getElementById("break-time-here");
var workTime = parseInt(workTimeDisplayArea.textContent);
var breakTime = parseInt(breakTimeDisplayArea.textContent);
var isPaused = false;
var workTimeInSeconds = parseInt(workTimeDisplayArea.textContent) * 60;
var breakTimeInSeconds = parseInt(breakTimeDisplayArea.textContent) * 60;
var totalTimeInSecond = workTimeInSeconds + breakTimeInSeconds;
var timerId = null;
makeButtonDisable(workMinusBtn);
makeButtonDisable(breakMinusBtn);
makeButtonDisable(resetBtn);
const message = document.getElementById("message");
const btnArrr = [
  {
    myBtn: workPlusBtn,
    method: workPlusFunction,
  },
  {
    myBtn: workMinusBtn,
    method: workMinusFunction,
  },
  {
    myBtn: breakPlusBtn,
    method: breakPlusFunction,
  },
  {
    myBtn: breakMinusBtn,
    method: breakMinusFunction,
  },
  {
    myBtn: startBtn,
    method: startFunction,
  },
  {
    myBtn: resetBtn,
    method: resetFunction,
  },
];
btnArrr.forEach(function (object_x, index) {
  const btn = object_x.myBtn;
  btn.addEventListener("click", object_x.method);
});

//increment the workTime by 5 Minutes
function workPlusFunction() {
  makeButtonEnable(resetBtn);
  workTime += 5;
  workTimeInSeconds = workTime * 60;
  workTimeDisplayArea.textContent = `${workTime} Min`;
  if (workTime >= 45) {
    makeButtonDisable(this);
  } else {
    makeButtonEnable(workMinusBtn);
  }
}

function makeButtonDisable(btnID) {
  btnID.disabled = true;
  btnID.style.opacity = 0.5;
  btnID.style.pointerEvents = "none";
}
function makeButtonEnable(btnID) {
  btnID.disabled = false;
  btnID.style.opacity = 1;
  btnID.style.pointerEvents = "auto";
}

function workMinusFunction() {
  makeButtonEnable(resetBtn);
  workTimeInSeconds = workTime * 60;
  workTime -= 5;
  workTimeDisplayArea.textContent = `${workTime} Min`;
  if (workTime <= 20) {
    makeButtonDisable(this);
  } else {
    makeButtonEnable(workPlusBtn);
  }
}
function breakPlusFunction() {
  makeButtonEnable(resetBtn);
  breakTime += 5;
  breakTimeInSeconds = breakTime * 60;
  breakTimeDisplayArea.textContent = `${breakTime} Min`;
  if (breakTime >= 30) {
    makeButtonDisable(this);
  } else {
    makeButtonEnable(breakMinusBtn);
  }
}
function breakMinusFunction() {
  makeButtonEnable(resetBtn);
  breakTime -= 5;
  breakTimeInSeconds = breakTime * 60;
  breakTimeDisplayArea.textContent = `${breakTime} Min`;
  if (breakTime <= 10) {
    makeButtonDisable(this);
  } else {
    makeButtonEnable(breakPlusBtn);
  }
}
function resetFunction() {
  location.reload();
  // console.log(isPaused);
  // makeButtonDisable(workMinusBtn);
  // makeButtonDisable(breakMinusBtn);
  // makeButtonEnable(workPlusBtn);
  // makeButtonEnable(breakPlusBtn);
  // makeButtonDisable(this);
  // // isPaused = true;
  // startBtn.textContent = "Start";
  // startBtn.style.backgroundColor = "#b31b1b";
  // // makeButtonEnable(this);
  // workTimeDisplayArea.textContent = "20 Min";
  // workTime = 20;
  // breakTimeDisplayArea.textContent = "10 Min";
  // breakTime = 10;
  // showMMSS.textContent = `MM:SS`;
  // showMMSS.parentElement.style.borderColor = "#fff";
  // showMMSS.style.color = "#fff";
}

function startFunction() {
  totalTimeInSeconds = workTimeInSeconds + breakTimeInSeconds;
  // console.log(totalTimeInSecond);
  makeButtonEnable(resetBtn);
  makeButtonDisable(workPlusBtn);
  makeButtonDisable(workPlusBtn);
  makeButtonDisable(breakMinusBtn);
  makeButtonDisable(breakPlusBtn);

  if (isPaused == true) {
    isPaused = false;
    startBtn.textContent = "Start";
    startBtn.style.backgroundColor = "#b31b1b";
    makeButtonEnable(this);
    console.log(totalTimeInSecond);
    clearTimeout(timerId);
  } else if (isPaused == false) {
    showTimer();
    isPaused = true;
    message.textContent = "Work";
    startBtn.textContent = "Pause";
    startBtn.style.backgroundColor = "#ff3800";
    makeButtonEnable(this);
  }
}

function showTimer() {
  timerId = setTimeout(timer, 1000);
}
var minutes = 0,
  seconds = 0;

function timer() {
  --totalTimeInSecond;
  // console.log(totalTimeInSecond);

  if (workTimeInSeconds > 0) {
    --workTimeInSeconds;
    // console.log(workTimeInSeconds);
    minutes = parseInt(workTimeInSeconds / 60);
    // console.log(minutes);
    seconds = workTimeInSeconds % 60;
    if (seconds >= 10) {
      showMMSS.textContent = `${minutes} : ${seconds}`;
    } else {
      showMMSS.textContent = `${minutes} : 0${seconds}`;
    }

    showMMSS.style.color = "seagreen";
    showMMSS.parentElement.style.borderColor = "seagreen";
  }

  if (workTimeInSeconds == 0 && breakTimeInSeconds > 0) {
    --breakTimeInSeconds;
    minutes = parseInt(breakTimeInSeconds / 60);
    seconds = breakTimeInSeconds % 60;
    showMMSS.textContent = `${minutes} : ${seconds}`;
    message.textContent = "Relax";
    showMMSS.style.color = "orange";
    showMMSS.parentElement.style.borderColor = "orange";
  }

  if (totalTimeInSecond <= 0) {
    location.reload();
    clearTimeout(timerId);
  }

  showTimer();
}
