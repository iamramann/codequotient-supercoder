var set_session_time = document.getElementById("display-session-time");
var session_plus_btn = document.getElementById("session-plus");
var session_minus_btn = document.getElementById("session-minus");
var set_break_time = document.getElementById("display-break-time");
var break_plus_btn = document.getElementById("break-plus");
var break_minus_btn = document.getElementById("break-minus");
var session_message = document.getElementById("session-number");
var remaining_minutes = document.getElementById("remaining-minutes");
var remaining_seconds = document.getElementById("remaining-seconds");
var start_timer_btn = document.getElementById("start-timer-btn");
var reset_timer_btn = document.getElementById("reset-timer-btn");
var timer_id = null;
var total_time = null;

handle_reset_timer_btn_behaviour(true, 0.5, "none");
//session time increment and decrement
set_session_time.textContent = `20 Min`;
var session_time_value = parseInt(set_session_time.textContent); //hold session-time value set by the user
handle_session_minus_btn_behaviour(true, 0.5, "none");
session_plus_btn.addEventListener("click", control_session_plus_time);
session_minus_btn.addEventListener("click", control_session_minus_time);

//break time increment and decrement
set_break_time.textContent = `10 Min`;
var break_time_value = parseInt(set_break_time.textContent); //hold break time

//value set by the user
handle_break_minus_btn_behaviour(true, 0.5, "none");
break_plus_btn.addEventListener("click", control_break_plus_time);
break_minus_btn.addEventListener("click", control_break_minus_time);

//handle session heading
session_message.textContent = `BProductive`;

//handle main-timer display values
remaining_minutes.textContent = `MM`;
remaining_seconds.textContent = `SS`;
start_timer_btn.addEventListener("click", start_timer_function);
reset_timer_btn.addEventListener("click", reset_timer_function);

//all functions are defined below this comment
var is_work_time = true;
function start_timer_function() {
  handle_reset_timer_btn_behaviour(false, 1, "auto");
  handle_start_timer_btn_behaviour(true, 0.5, "none");
  var seconds = 60;
  timer_id = setInterval(function () {
    if (is_work_time == true) {
      if (seconds <= 9) {
        console.log("<10");
        remaining_seconds.textContent = `0${seconds}`;
      } else {
        console.log("here");
        if (seconds - 1 == 9) {
          remaining_seconds.textContent = `0${seconds - 1}`;
        } else {
          remaining_seconds.textContent = seconds - 1;
        }
      }
      if (session_time_value < 10) {
        remaining_minutes.textContent = `0${session_time_value}`;
      } else {
        remaining_minutes.textContent = session_time_value - 1;
      }
      seconds--;

      if (session_time_value == 0) {
        is_work_time = false;
        handle_start_timer_btn_behaviour(false, 1, "auto");
      }

      if (seconds == 0) {
        seconds = 60;
        session_time_value--;
      }
    } else {
      session_message.textContent = "Relax";
      remaining_seconds.textContent = seconds - 1;
      remaining_minutes.textContent = break_time_value - 1;
      seconds--;
      value = break_time_value;

      if (break_time_value == 0 && seconds == 0) {
        session_message.textContent = "Time's UP";
        clearInterval(timer_id);
      }

      if (seconds == 0) {
        seconds = 60;
        break_time_value--;
      }
    }
  }, 1000);
}

/*   if (seconds < 10) {
        remaining_seconds.textContent = `0${seconds}`;
      }

      if (seconds == 0) {
        seconds = 60;
        session_time_value--;
      }
      if (session_time_value < 10) {
        remaining_minutes.textContent = `0${session_time_value}`;
      }
*/

function reset_timer_function(event) {
  utility_function1();
  default_seconds_value = 60;
  session_message.textContent = "BProductive";
  remaining_minutes.textContent = "MM";
  remaining_seconds.textContent = "SS";
  set_session_time.textContent = `20 Min`;
  session_time_value = parseInt(set_session_time.textContent);
  set_break_time.textContent = `10 Min`;
  break_time_value = parseInt(set_session_time.textContent);
  if (timer_id) {
    clearInterval(timer_id);
  }
}

function utility_function1() {
  handle_reset_timer_btn_behaviour(true, 0.5, "none");
  handle_break_minus_btn_behaviour(true, 0.5, "none");
  handle_session_minus_btn_behaviour(true, 0.5, "none");
  handle_start_timer_btn_behaviour(false, 1, "auto");
  handle_session_plus_btn_behaviour(false, 1, "auto");
  handle_break_plus_btn_behaviour(false, 1, "auto");
}

function utility_function2() {
  handle_start_timer_btn_behaviour(true, 0.5, "none");
  handle_reset_timer_btn_behaviour(false, 1, "auto");
  handle_break_minus_btn_behaviour(true, 0.5, "none");
  handle_break_plus_btn_behaviour(true, 0.5, "none");
  handle_session_minus_btn_behaviour(true, 0.5, "none");
  handle_session_plus_btn_behaviour(true, 0.5, "none");
}

//session-time-control increment and decrement functions
function control_session_plus_time(event) {
  console.log(set_session_time.textContent);
  session_time_value = parseInt(set_session_time.textContent) + 5;
  handle_reset_timer_btn_behaviour(false, 1, "auto");
  handle_session_minus_btn_behaviour(false, 1, "auto");
  if (session_time_value >= 45) {
    handle_session_plus_btn_behaviour(true, 0.5, "none");
  }
  set_session_time.textContent = `${session_time_value} Min`;
  remaining_minutes.textContent = `${session_time_value}`;
  remaining_seconds.textContent = `00`;
}
function control_session_minus_time(event) {
  var time_in_integer = parseInt(set_session_time.textContent) - 5;
  handle_reset_timer_btn_behaviour(false, 1, "auto");
  handle_session_plus_btn_behaviour(false, 1, "auto");
  if (time_in_integer <= 20) {
    handle_session_minus_btn_behaviour(true, 0.5, "none");
  }
  set_session_time.textContent = `${time_in_integer} Min`;
  session_time_value = time_in_integer;
  remaining_minutes.textContent = time_in_integer;
  remaining_seconds.textContent = `00`;
}

//break-time-control increment and decrement functions
function control_break_plus_time(event) {
  var time_in_integer = parseInt(set_break_time.textContent) + 5;
  handle_reset_timer_btn_behaviour(false, 1, "auto");
  handle_break_minus_btn_behaviour(false, 1, "auto");
  if (time_in_integer >= 30) {
    handle_break_plus_btn_behaviour(true, 0.5, "none");
  }

  set_break_time.textContent = `${time_in_integer} Min`;
}
function control_break_minus_time(event) {
  var time_in_integer = parseInt(set_break_time.textContent) - 5;
  handle_reset_timer_btn_behaviour(false, 1, "auto");
  handle_break_plus_btn_behaviour(false, 1, "auto");

  if (time_in_integer <= 10) {
    handle_break_minus_btn_behaviour(true, 0.5, "none");
  }

  set_break_time.textContent = `${time_in_integer} Min`;
}

function handle_reset_timer_btn_behaviour(
  is_disable,
  opacity_value,
  pointer_event_type
) {
  reset_timer_btn.disabled = is_disable;
  reset_timer_btn.style.opacity = opacity_value;
  reset_timer_btn.style.pointerEvents = pointer_event_type;
}

function handle_start_timer_btn_behaviour(
  is_disable,
  opacity_value,
  pointer_event_type
) {
  start_timer_btn.disabled = is_disable;
  start_timer_btn.style.opacity = opacity_value;
  start_timer_btn.style.pointerEvents = pointer_event_type;
}

function handle_session_plus_btn_behaviour(
  is_disable,
  opacity_value,
  pointer_event_type
) {
  session_plus_btn.disabled = is_disable;
  session_plus_btn.style.opacity = opacity_value;
  session_plus_btn.style.pointerEvents = pointer_event_type;
}
function handle_session_minus_btn_behaviour(
  is_disable,
  opacity_value,
  pointer_event_type
) {
  session_minus_btn.disabled = is_disable;
  session_minus_btn.style.opacity = opacity_value;
  session_minus_btn.style.pointerEvents = pointer_event_type;
}
function handle_break_plus_btn_behaviour(
  is_disable,
  opacity_value,
  pointer_event_type
) {
  break_plus_btn.disabled = is_disable;
  break_plus_btn.style.opacity = opacity_value;
  break_plus_btn.style.pointerEvents = pointer_event_type;
}
function handle_break_minus_btn_behaviour(
  is_disable,
  opacity_value,
  pointer_event_type
) {
  break_minus_btn.disabled = is_disable;
  break_minus_btn.style.opacity = opacity_value;
  break_minus_btn.style.pointerEvents = pointer_event_type;
}
