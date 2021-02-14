const email_row = $("#email-row");
const first_name_row = $("#first-name-row");
const last_name_row = $("#last-name-row");
const contact_row = $("#contact-row");
const w_text = $("#w-text");
var arr = [email_row, first_name_row, last_name_row, contact_row];
//handle signup related functionality
$("#user-signup").submit(function (e) {
  e.preventDefault();
  const form = $(this);
  const url = form.attr("action");
  const type = form.attr("method");
  const data =
    form.serialize() + `&userId=uid${Math.floor(Math.random() * 999999999)}`;
  $.ajax({
    type: type,
    url: url,
    data: data,
    success: function (data) {
      //reset form after submission
      console.log(data);
      if (!data) {
        w_text.text("user already exist***");
        w_text.css({ color: "red" });
      } else {
        w_text.text("You are successfully regitered***");
        w_text.css({ color: "limegreen" });
      }
      $("#user-signup").trigger("reset");
      for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass("valid");
      }
    },
    error: function () {
      alert("fail");
      for (var i = 0; i < arr.length; i++) {
        arr[i].removeClass("valid");
      }
    },
  });
});
