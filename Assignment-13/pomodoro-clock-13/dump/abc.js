function start_timer_function(event) {
  handle_reset_timer_btn_behaviour(false, 1, "auto");
  handle_start_timer_btn_behaviour(true, 0.5, "none");
  handle_session_plus_btn_behaviour(true, 0.5, "none");
  handle_session_minus_btn_behaviour(true, 0.5, "none");
  handle_break_plus_btn_behaviour(true, 0.5, "none");
  handle_break_minus_btn_behaviour(true, 0.5, "none");
  session_message.textContent = "Work Hard";
  remaining_seconds.textContent = 59;
  session_time_value -= 1;
  remaining_minutes.textContent = session_time_value;
  var check_for_work_time = session_time_value;
  var session_time_seconds = 60;
  minutes_timer_id = setInterval(function () {
    remaining_minutes.textContent = session_time_value;
    remaining_seconds.textContent = session_time_seconds - 1;
    session_time_seconds--;

    if (session_time_seconds < 10) {
      remaining_seconds.textContent = `0${session_time_seconds}`;
    }

    if (session_time_value < 10) {
      remaining_minutes.textContent = `0${session_time_value}`;
    }

    if (session_time_seconds == 0) {
      remaining_seconds.textContent = 59;
      session_time_seconds = 60;
      remaining_minutes.textContent = session_time_value - 1;
      session_time_value--;

      if (session_time_value == 0) {
        remaining_minutes.textContent = "00";
        remaining_seconds.textContent = "00";
        clearInterval(minutes_timer_id);
        call_when_work_time_is_over();
      }
    }
  }, 10);
}

function call_when_work_time_is_over(time_value) {
  session_message.textContent = "Relax";
  remaining_seconds.textContent = 59;
  console.log(break_time_value);
  break_time_value -= 1;
  remaining_minutes.textContent = break_time_value;
  var session_time_seconds = 60;
  minutes_timer_id = setInterval(function () {
    console.log("here");
    remaining_minutes.textContent = break_time_value;
    remaining_seconds.textContent = session_time_seconds - 1;
    session_time_seconds--;

    if (session_time_seconds < 10) {
      remaining_seconds.textContent = `0${session_time_seconds}`;
    }

    if (break_time_value < 10) {
      remaining_minutes.textContent = `0${break_time_value}`;
    }

    if (session_time_seconds == 0) {
      remaining_seconds.textContent = 59;
      session_time_seconds = 60;
      remaining_minutes.textContent = break_time_value - 1;
      break_time_value--;

      if (break_time_value == 0) {
        remaining_minutes.textContent = "00";
        remaining_seconds.textContent = "00";
        clearInterval(minutes_timer_id);
      }
    }
  }, 10);
}
