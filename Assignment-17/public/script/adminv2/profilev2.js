//utitliy function that takes target eye element and toggle it
import { toggle_password } from "../utilities/toggle_pwd_field.js";
const target_eye = $("#admin-eye");
const btn_update = $("#btn-update");
const btn_submit = $("#btn-submit");
const username = $("#username");
const password = $("#password");
const email = $("#email");
const mobile = $("#mobile");

//toggle password field eye icon
toggle_password(target_eye);

//handle admin avatar
const avatar_input = $("#avatar");
const avatar_btn = $("#avatar-submit");
const avatar_link = $("#select_avatar");
avatar_input.css({ opacity: "0", display: "none" });
avatar_btn.css({ opacity: "0", display: "none" });
avatar_link.click(function (e) {
  //enable input field and submit btn
  avatar_input.prop("disabled", false);
  avatar_btn.prop("disabled", false);
  avatar_input.trigger("click");
  console.log($("#avatar").val());
  avatar_input.change(function (e) {
    avatar_btn.trigger("click");
    alert("updated");
  });
});

//update admin record script
$("#btn-submit").click(function (e) {
  const form = $("#admin");
  const url = form.attr("action");
  const data = form.serialize();
  $.ajax({
    url: url,
    type: "PUT",
    data: data,
    success: function () {
      alert("updated");
      submit_disable_update_enable(false);
      toggle_active_fields(true);
    },
    error: function () {
      alert("some error occured!!");
    },
  });
});

//handle update click event script
btn_update.click(function (e) {
  console.log("1");
  $("#admin input").each(function () {
    console.log("here");
    toggle_active_fields(false);
    submit_enable_update_disable(false);
    const name = $(this).attr("name");
    if (
      name === "username" ||
      name === "password" ||
      name === "mobile" ||
      name === "email"
    ) {
      $(this).prop("disabled", false);
    }
  });
});

/* utitlity functions*/

//1 decorate btns according to event
function submit_enable_update_disable(value) {
  btn_submit.prop("disabled", value);
  btn_update.prop("disabled", !value);
  btn_submit.css({
    "background-color": "var(--primary-color)",
    cursor: "pointer",
    "pointer-events": "auto",
  });
  btn_update.css({
    "background-color": "#ddd",
    cursor: "not-allowed",
  });
}

//2 decorate btns according to event
function submit_disable_update_enable(value) {
  btn_submit.prop("disabled", !value);
  btn_update.prop("disabled", value);
  btn_submit.css({
    "background-color": "#ddd",
    cursor: "not-allowed",
  });
  btn_update.css({
    "background-color": "var(--success-color)",
    cursor: "pointer",
    "pointer-events": "auto",
  });
}

//3 make form fields enable or disable
function toggle_active_fields(value) {
  username.prop("disabled", value);
  email.prop("disabled", value);
  password.prop("disabled", value);
  mobile.prop("disabled", value);
}
