var set_session_time = document.getElementById("display-session-time");
var session_plus_btn = document.getElementById("session-plus");
var session_minus_btn = document.getElementById("session-minus");
set_session_time.textContent = 20;
session_minus_btn.disabled = true;
session_minus_btn.style.pointerEvents = "none";
session_minus_btn.style.opacity = 0.5;

function control_session_plus_time() {
  var time_in_integer = parseInt(set_session_time.textContent) + 5;
  session_minus_btn.disabled = false;
  session_minus_btn.style.pointerEvents = "auto";
  session_minus_btn.style.opacity = 1;
  if (time_in_integer >= 45) {
    session_plus_btn.disabled = true;
    session_plus_btn.style.pointerEvents = "none";
    session_plus_btn.style.opacity = 0.5;
  }

  set_session_time.textContent = time_in_integer;
}
function control_session_minus_time() {
  var time_in_integer = parseInt(set_session_time.textContent) - 5;
  session_plus_btn.disabled = false;
  session_plus_btn.style.pointerEvents = "auto";
  session_plus_btn.style.opacity = 1;

  if (time_in_integer <= 20) {
    session_minus_btn.disabled = true;
    session_minus_btn.style.pointerEvents = "none";
    session_minus_btn.style.opacity = 0.5;
  }

  set_session_time.textContent = time_in_integer;
}
export { control_session_plus_time, control_session_minus_time };
