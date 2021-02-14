const email_row = $("#email-row");
const first_name_row = $("#first-name-row");
const last_name_row = $("#last-name-row");
const contact_row = $("#contact-row");
const email = $("#email");
const email_regex = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/;
const first_name = $("#firstname");
const last_name = $("#lastname");
const name_regex = /^[a-zA-Z]{3,10}$/; //no space allowed
const contact = $("#contact");
const contact_regex = /[6,7,8,9][0-9]{9,10}$/;

contact.keyup(function (e) {
  const warning_text_element = $(e.target).siblings()[0];
  const message = "invalid contact number*";
  const contact_val = $(this).val();
  if (contact_val.match(contact_regex)) {
    $(warning_text_element).addClass("hidden").removeClass("block").text("");
    contact_row.addClass("valid");
    contact_row.removeClass("invalid");
  } else {
    $(warning_text_element)
      .addClass("block")
      .removeClass("hidden")
      .text(message);
    contact_row.removeClass("valid");
    contact_row.addClass("invalid");
  }
  if (contact_val == "") {
    $(warning_text_element).removeClass("hidden block").text("");
    contact_row.removeClass("valid invalid");
  }
});

last_name.keyup(function (e) {
  const warning_text_element = $(e.target).siblings()[0];

  // $(this).val($(this).val().toUpperCase().trim());
  $(this).val($(this).val().toUpperCase().trim());
  var last_name_val = $(this).val();

  const message = "minimum length should be 3 and only alphabates are allowed*";

  if (last_name_val.match(name_regex)) {
    $(warning_text_element).addClass("hidden").removeClass("block").text("");
    last_name_row.addClass("valid").removeClass("invalid");
  } else {
    $(warning_text_element)
      .addClass("block")
      .removeClass("hidden")
      .text(message);
    last_name_row.removeClass("valid").addClass("invalid");
  }
  if (last_name_val == "") {
    $(warning_text_element).removeClass("hidden block").text("");
    last_name_row.removeClass("valid invalid");
  }
});

first_name.keyup(function (e) {
  const warning_text_element = $(e.target).siblings()[0];
  const message = "minimum length should be 3 and only alphabates are allowed*";

  $(this).val($(this).val().toUpperCase().trim());
  const first_name_val = $(this).val();

  if (first_name_val.match(name_regex)) {
    $(warning_text_element).addClass("hidden").removeClass("block").text("");
    first_name_row.addClass("valid").removeClass("invalid");
  } else {
    $(warning_text_element)
      .addClass("block")
      .removeClass("hidden")
      .text(message);
    first_name_row.removeClass("valid");
    first_name_row.addClass("invalid");
  }
  if (first_name_val == "") {
    $(warning_text_element).removeClass("hidden block").text("");
    first_name_row.removeClass("valid invalid");
  }
});

//script to validate email on keyup
email.keyup(function (e) {
  const warning_text_element = $(e.target).siblings()[0];
  const message = "please enter a valid email *";
  $(this).val($(this).val().toUpperCase());
  const email_val = $(this).val();
  if (email_val.match(email_regex)) {
    $(warning_text_element).addClass("hidden").removeClass("block").text("");
    email_row.addClass("valid");
    email_row.removeClass("invalid");
  } else {
    $(warning_text_element)
      .addClass("block")
      .removeClass("hidden")
      .text(message);
    email_row.removeClass("valid");
    email_row.addClass("invalid");
  }
  if (email_val == "") {
    $(warning_text_element).removeClass("hidden block").text("");
    email_row.removeClass("valid invalid");
  }
});
