import { getCurrentDateAndTime } from "./dateandtime.min.js";
const heading = $(".heading");
const task_list_area = $("#left-p-2");
const info_text = $("#info-text");
var h1;
const textarea = $("textarea");
const ENTER_STATUS_CODE = 13;

/* jquery to handle the size of heading when screen resizes  */
$(window).resize(function () {
  if ($(window).width() < 497) {
    heading.removeClass("lg");
    heading.addClass("md");
  } else {
    heading.addClass("lg");
    heading.removeClass("md");
  }
});

/* IIFE to load file contents when page reloads */
(function () {
  //ajax request to get data from the server
  $.ajax("/read_tasks", {
    method: "GET",
    success: function (data) {
      //data holds all tasks array in string format
      var tasks_array = JSON.parse(data);

      //iterate array only if server returns some non-empty value
      if (tasks_array.length) {
        tasks_array.forEach(function (x, xindex) {
          /*update frontend screen with available content and make them ready for various events*/
          attach_event_listeners_and_make_content_ready(x);
        });
      } else {
        //dispaly message here that nothing to show please enter some tasks
      }
    },
  });
})();

//handle textarea input event when user presses enter
textarea.keypress(function (event) {
  //if user press enter then append task to left-side
  if (event.keyCode === ENTER_STATUS_CODE) {
    event.preventDefault();
    const textarea_value = textarea.val().trim();
    //check if user send empty value or type anything or not
    if (textarea_value) {
      //provide id for each task
      const tid = Math.floor(Math.random() * 99999);

      //create data and time strings
      const date = getCurrentDateAndTime();
      const date_string = `${date.day}/${date.month}/${date.year}`;
      const time_string = `${date.hour}:${date.minutes}:${date.seconds}`;

      //create task object with appropriate values
      const task = {
        text: textarea_value,
        date: date_string,
        time: time_string,
        tid: `task${tid}`,
        isChecked: false,
        isDeleted: false,
      };

      //handle server code here
      send_task_to_server(task);

      //empty textarea after sending data to server
      textarea.val("");
    } else {
      alert("please provide some value");
    }
  }
});

/* function to update frontend screen with available content and make them ready for various events */
function attach_event_listeners_and_make_content_ready(task) {
  var unchecked_box;
  var first_div;
  /* status false means that user isn't completed the task it means empty box is placed and also task style is normal */

  /* show only those tasks whose isDeleted === false means file is not deleted by user */
  if (!task.isDeleted) {
    if (task.isChecked === false) {
      unchecked_box = $('<span class="box"> Mark as Done &#9744;</span>').click(
        handle_checkbox_click_event
      );

      first_div = $(
        `<div class="abc" id= ${task.tid}> <h1>` + task.text + "</h1></div>"
      );
    } else if (task.isChecked === true) {
      /* status true means that user has completed the task and place check-box is placed and also task style is line-through */
      unchecked_box = $(
        '<span class="checked-box"> Mark as Pending &#9745;</span>'
      ).click(handle_checkbox_click_event);

      $(unchecked_box).css({
        "background-color": "var(--success-color)",
        color: "var(--light-color-1)",
      });

      first_div = $(
        `<div class="abc" id= ${task.tid}> <h1 style="text-decoration:line-through;">` +
          task.text +
          "</h1></div>"
      );
    }

    //create a new times symbol element each time when user hits enter and attach click event listener
    const times = $('<span class="times" > Delete &#10006;</span>').click(
      handle_times_click_event
    );

    /* create date and time inside a sapn to be displayed */
    const dateNtime = $(
      `<span class="dateNtime">on ${task.date} at ${task.time}</span>`
    );

    //append both symbols to a new div and make this div sibling to task text
    const second_div = $("<div class='second-div'></div > ")
      .append(unchecked_box)
      .append(dateNtime)
      .append(times);

    // attach other elements to task text value
    $(first_div).append(second_div);

    //append to left hand side area
    task_list_area.append(first_div);

    //display success message
    console.log("new task created");
  }
}

//functions
function handle_checkbox_click_event(e) {
  //get times element in  target_element
  const target_element = $(e.target);
  const get_class = $(target_element).attr("class");
  const get_sibling_element = target_element.parent().siblings()[0];
  const target_id = target_element.parent().parent().attr("id");

  //ajax to updatestatus in the database
  $.ajax("/update_status", {
    type: "POST",
    data: `${target_id}`,
    contentType: "application/json",
    success: function () {
      //change unchecked box to checked box and make text line through or vice-versa
      if (get_class === "box") {
        $(target_element)
          .removeClass(get_class)
          .addClass("checked-box")
          .html(`Mark as Pending &#9745`)
          .css({
            "background-color": "var(--success-color)",
            color: "var(--light-color-1)",
          });
        $(get_sibling_element).css({
          "text-decoration": "line-through",
          color: "#606060",
        });
      } else if (get_class === "checked-box") {
        $(target_element)
          .html(`Mark as Done &#9744`)
          .removeClass(get_class)
          .addClass("box")
          .css({ "background-color": "#ccc", color: "#606060" });
        $(get_sibling_element).css({
          "text-decoration": "none",
          color: "#000",
        });
      }
      //display success message
      console.log("task status updated");
    },
  });
}

function handle_times_click_event(e) {
  //get times element in  target_element
  const target_element = $(e.target);
  const target_id = target_element.parent().parent().attr("id");

  //ajax request to delete entry from the database or storage
  $.ajax("/delete_task", {
    type: "POST", // http method
    data: target_id, // data to submit
    contentType: "application/json",
    success: function () {
      //manipulate dom i.e delete from dom when user clicks
      target_element.parent().parent()[0].remove();

      //display success message
      console.log("task deleted");
    },
  });
}

//ajax request to send data to the server
function send_task_to_server(task) {
  $.ajax("/add_new_task", {
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(task),
    success: attach_event_listeners_and_make_content_ready(task),
  });
}

// h1 = $(
//   "<h1 class='md info-text' id='info-text' > Nothing to Show Please add Some Task</h1>"
// );
// // task_list_area.append(h1);
