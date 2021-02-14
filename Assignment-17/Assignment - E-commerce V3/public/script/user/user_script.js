import { toggle_password } from "../utilities/toggle_pwd_field.js";

//when page loads focus get to username field automatically
(function () {
  $("#username").focus();
})();

//utility function to toggle password eye
toggle_password($("#pass-eye"));
