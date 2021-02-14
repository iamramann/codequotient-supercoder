const email_regex = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/;
const contact_regex = /[6,7,8,9][0-9]{9,10}$/;
const email = $("#email");
const contact = $("#contact");
const username = $("#username");
const password = $("#password");
const fullname = $("#name");

const update_btn = $("#update-btn");

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
    alert("avatar successfully updated");
  });
});

update_btn.click(function (e) {
  const id = update_btn.val();
  const fullname_val = fullname.text().trim();
  const index = fullname_val.indexOf(" ");
  const firstname = fullname_val.substring(0, index);
  const lastname = fullname_val.substring(index);

  const data = {
    firstname: firstname,
    lastname: lastname,
    email: email.text().trim(),
    password: password.text().trim(),
    username: username.text().trim(),
    contact: contact.text().trim(),
  };

  $.ajax({
    type: "PUT",
    url: `/user/update_user/${id}`,
    data: data,
  })
    .done(function () {
      alert("Profile updated!");
    })
    .fail(function (e) {});
});

//script to validate email on keyup
email.keyup(function (e) {
  const email_val = email.text();
  if (email_val.match(email_regex)) {
    console.log("valid");
    email.css({
      outline: "2px solid  var(--success-color)",
    });
  } else {
    email.css({
      outline: "2px solid  var(--error-color)",
    });
  }
});

email.focusout(function (e) {
  email.css({
    outline: "none",
  });
});

contact.keyup(function (e) {
  const contact_val = contact.text();
  if (contact_val.match(contact_regex) && contact_val.length == 10) {
    console.log("valid");
    contact.css({
      outline: "2px solid  var(--success-color)",
    });
  } else {
    contact.css({
      outline: "2px solid  var(--error-color)",
    });
  }
});
contact.focusout(function (e) {
  contact.css({
    outline: "none",
  });
});
