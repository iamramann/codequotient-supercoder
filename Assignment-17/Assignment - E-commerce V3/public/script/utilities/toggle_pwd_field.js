//utitliy function that takes target eye element and toggle it
function toggle_password(target_eye) {
  var isHidden = true;
  target_eye.click(function (e) {
    // const target_element = $(e.target)
    const target_input = $(target_eye.siblings()[0]);
    if (isHidden === true) {
      target_eye.attr("class", "fas fa-eye-slash");
      target_input.attr("type", "text");
      isHidden = false;
    } else {
      target_eye.attr("class", "fas fa-eye");
      target_input.attr("type", "password");
      isHidden = true;
    }
  });
}

export { toggle_password };
