//RAMAN SHARMA
import { getCurrentDateAndTime } from "./script/dateandtime.js";
const ask = document.getElementById("ask");
const rightColumn = document.getElementById("right-column");
const place = document.getElementById("place");
const question = document.getElementById("question");
const subject = document.getElementById("subject");
const paste = document.getElementById("paste");
const responseForm = document.getElementById("res-form");
const key = "allUserData";
const usersNameWhoComment = document.getElementById("other-user-name");
const usersCommentText = document.getElementById("other-user-ans");
const usersCommentBtn = document.getElementById("other-user-submit");
const questionArea = document.getElementById("display-ques");
const questionIdArea = document.getElementById("ques-id");
const searchField = document.getElementById("search-ques");
const ul = document.createElement("ul");
const resolveBtn = document.getElementById("resolve");
const modal = document.getElementById("my-modal");
modal.style.display = "none";
const span = document.getElementsByClassName("close")[0];

const p = document.createElement("p");
ul.setAttribute("id", "user-ans-list");
var isDiscussionForm = false;
// const previousAnswerArea = document.getElementById("pre-ans");
// const hr = document.createElement("hr");
//global var to store user data if data in localstorage is exist asssing otherwise assign []
// var allUserDataArray = JSON.parse(localStorage.getItem(key)) || [];

//make rightColumn display to none as page loads
rightColumn.style.display = "none";
responseForm.style.display = "none";

(function () {
  const dateTimeArea = document.getElementById("date-time");
  dateTimeArea.style.backgroundColor = "var(--dark-color-1)";
  dateTimeArea.style.color = "var(--light-color-1)";
  dateTimeArea.style.fontWeight = "bold";
  dateTimeArea.style.textAlign = "center";
  // dateTimeArea.style.wordSpacing="15px"
  setInterval(function () {
    const date = getCurrentDateAndTime();
    const dateString = `${date.day}/${date.month}/${date.year}`;
    const timeString = `${date.hour}:${date.minutes}:${date.seconds}`;
    dateTimeArea.textContent = `${dateString} ${timeString}`;
  }, 1000);
})();

usersCommentText.addEventListener("keypress", function (event) {
  if (usersCommentText.value > 20)
    usersCommentText.value = `${usersCommentText.value} \n`;
});

function updateQuestionArea() {
  paste.innerHTML = "";
  /*each time is retieve data from local storage instead of using a global var for local data because a number of function modifies the data or local data changes too frequently on each request so just to preserve the data i use this approach*/
  const userDataFromLocalStorage = localStorage.getItem(key);
  if (userDataFromLocalStorage !== null) {
    const userDataInJSON = JSON.parse(userDataFromLocalStorage);

    userDataInJSON.forEach(function (object, index) {
      const subject_value = object.subject;
      const question_value = object.question;
      const quesId = object.qid;
      const dateString = object.date;
      const timeString = object.time;
      const span = document.createElement("span");
      span.setAttribute("class", "ques-span");
      span.setAttribute("id", `${quesId}`);
      span.innerHTML = `<label>Asked on <b>${dateString}</b> at <b>${timeString}</b> </label><h1>${subject_value}</h1><p>${question_value}</p><hr>`;
      paste.appendChild(span);
    });
    //display complete retrive data to output screen
  } else {
    return;
  }
}

updateQuestionArea();
makeThemListen();

/*makeThemListen() function gets all span having class(ques-span) iterate over this span array and add click addEventListener so when user clicks on the question then iterate over localStorage array and find selected question in the localStorage and then change the textContent of various fields...*/

function makeThemListen() {
  const insertBeforeBtn = questionArea.lastElementChild;
  ul.style.listStyleType = "decimal";
  ul.setAttribute("class", "user-ans");
  const qsa = document.querySelectorAll(".ques-span");
  qsa.forEach(function (x, xindex) {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem(key));
    x.addEventListener("click", function abc(event) {
      responseForm.style.display = "block";
      // x.removeEventListener("click", abc);
      rightColumn.style.display = "none";
      responseForm.style.backgroundColor = "var(--light-color-3)";
      responseForm.style.display = "block";
      const subjectName = document.getElementById("res-sub");
      const questionName = document.getElementById("res-ques");
      userDataFromLocalStorage.forEach(function (y, yindex) {
        if (y.qid === x.id) {
          ul.innerHTML = "";
          questionIdArea.textContent = y.qid;
          subjectName.textContent = y.subject;
          questionName.textContent = y.question;

          if (typeof y.answers !== "undefined") {
            p.textContent = "Answers";
            p.setAttribute("id", "user-ans-id");
            questionArea.insertBefore(p, insertBeforeBtn);
            y.answers.forEach(function (z, zindex) {
              const li = document.createElement("li");
              // li.appendChild(hr);
              li.style.margin = "5px 10px";
              li.innerHTML = `${z.answer} ~ by <a href="# style="color:red">${z.name}</a> on <b>${z.date}</b> at<b> ${z.time}</b> <hr>`;
              ul.appendChild(li);
            });
            questionArea.insertBefore(ul, insertBeforeBtn);
          }
        }
      });
    });
  });
}

//handle click even when user clicks question submit button
place.addEventListener("click", function () {
  //get the length of question and subject
  const qusetion_value_length = question.value.trim().length;
  const subject_value_length = subject.value.trim().length;
  const subject_field_value = subject.value;
  const question_field_value = question.value;
  const date = getCurrentDateAndTime();
  const dateString = `${date.day}-${date.month}-${date.year}`;
  const timeString = `${date.hour}:${date.minutes}:${date.seconds}`;
  //returns true if either or both of them is empty
  if ((qusetion_value_length === 0 || subject_value_length === 0) & 1) {
    //handle here if user provides wrong input
    alert("Please provide a value!!");
  } else {
    //if everything goes fine handle here
    //wrap question and subject inside a span and append to our target location i.e left-lower portion named as paste
    const uniqueQuesId = getUniqueId();
    const span = document.createElement("span");
    span.setAttribute("class", "ques-span");
    span.setAttribute("id", `ques${uniqueQuesId}`);
    span.innerHTML = `<label >on ${dateString} at ${timeString} </label><h1>${subject_field_value}</h1><p>${question_field_value}</p><hr>`;
    paste.appendChild(span);

    //handle when a user clicks to a question span
    // span.addEventListener("  click", function () {});

    //place user questions and subjexts {object} inside the allUserDataArray []
    const userObject = {
      subject: subject_field_value,
      question: question_field_value,
      qid: `ques${uniqueQuesId}`,
      date: dateString,
      time: timeString,
      answers: [],
    };

    const userDataFromLocalStorage =
      JSON.parse(localStorage.getItem(key)) || [];
    // const userDataFromLocalStorage = JSON.parse(localStorage.getItem(key)) || [];

    userDataFromLocalStorage.push(userObject);
    // allUserDataArray.push(userObject);
    const allUserDataArrayAfterStringify = JSON.stringify(
      userDataFromLocalStorage
    );
    localStorage.setItem(key, allUserDataArrayAfterStringify);
    paste.innerHTML = "";
    updateQuestionArea();
    makeThemListen();
    //after pasting the content make questiona and subject to initial state
    question.value = "";
    subject.value = "";
  }
});

//handle event when user click ask question button
ask.addEventListener("click", function () {
  if (!isDiscussionForm) {
    responseForm.style.display = "none"; //remove this line to display both of them stacked to one another
    rightColumn.style.backgroundColor = "var(--light-color-1)";
    rightColumn.style.display = "block";
    isDiscussionForm = true;
  } else {
    isDiscussionForm = false;
    responseForm.style.display = "none";
    rightColumn.style.display = "block";
  }
});

searchField.addEventListener("focus", function () {
  paste.innerHTML = "";
});

searchField.addEventListener("input", function (event) {
  //if user hits enter
  paste.innerHTML = "";

  var text = "No topic found related to your seach";
  const userDataFromLocalStorage = JSON.parse(localStorage.getItem(key));
  //
  const pattern = searchField.value.trim();
  var flag = true;

  if (pattern.length > 0) {
    // if (event.key === "Enter") {
    userDataFromLocalStorage.forEach(function (x, xindex) {
      //
      //create a new regex for match() function...see defiantion for more details
      var re = new RegExp(pattern, "g");

      if (x.subject.match(re) === null) {
      } else {
        flag = false;

        const span = document.createElement("span");
        span.setAttribute("class", "ques-span");
        span.setAttribute("id", `${x.qid}`);
        span.innerHTML = `<label>Asked on <b>${x.date}</b> at <b>${x.time}</b> </label><h1>${x.subject}</h1><p>${x.question}</p><hr>`;
        paste.appendChild(span);
        makeThemListen();
      }
      // The search() method searches a string for a specified value, and returns the position of the match.
      //
      //
    });

    if (flag) {
      paste.innerHTML = `<h1 class="not-found-text">${text}</h1>`;
      // searchField.blur();
      searchField.addEventListener("blur", function abc() {
        // searchField.removeEventListener("")
        searchField.value = "";
        updateQuestionArea();
        makeThemListen();
      });

      searchField.addEventListener("mouseleave", function () {
        searchField.blur();
        updateQuestionArea();
        makeThemListen();
      });
    }
    // }
  } else {
    searchField.blur();
    updateQuestionArea();
    makeThemListen();
  }
});

usersCommentBtn.addEventListener("click", function () {
  //
  const userAnswerList = document.getElementById("user-ans-list");
  const userName = usersNameWhoComment.value.trim();
  const userAnswer = usersCommentText.value.trim();
  const userDataFromLocalStorage = JSON.parse(localStorage.getItem(key));
  const li = document.createElement("li");
  li.style.margin = "5px 10px";
  var ans = userDataFromLocalStorage.answers;
  if ((userAnswer.length === 0 || userName.length === 0) & 1) {
    alert("Please Provide a value");
  } else {
    const date = getCurrentDateAndTime();
    const dateString = `${date.day}-${date.month}-${date.year}`;
    const timeString = `${date.hour}:${date.minutes}:${date.seconds}`;
    li.innerHTML = `${userAnswer} ~ by <a href="#"> ${userName} </a> on <b> ${dateString} </b>at <b>${timeString}</b>`;

    userAnswerList.appendChild(li);
    const traverseUptoLabel =
      usersCommentBtn.parentElement.parentElement.parentElement.parentElement
        .firstElementChild.firstElementChild.nextElementSibling
        .firstElementChild.textContent;

    userDataFromLocalStorage.forEach(function (x, index) {
      //
      //if matched it means we find the target object now append
      if (x.qid === traverseUptoLabel) {
        x.answers.push({
          name: userName,
          answer: userAnswer,
          answerId: `ans${getUniqueId()}`,
          date: dateString,
          time: timeString,
        });
      }
    });
  }
  usersNameWhoComment.value = "";
  usersCommentText.value = "";
  localStorage.setItem(key, JSON.stringify(userDataFromLocalStorage));
});

span.onclick = function (e) {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

resolveBtn.addEventListener("click", function (event) {
  // window.confirm("");
  modal.style.display = "block";
  modal.addEventListener("click", function (e) {
    if (e.target.id === "btnyes") {
      modal.style.display = "none";
      searchField.value = "";
      const getCurrentQuesId =
        event.target.parentElement.firstElementChild.textContent;
      var userDataFromLocalStorage = JSON.parse(localStorage.getItem(key));

      userDataFromLocalStorage.forEach(function (x, xindex) {
        if (x.qid === getCurrentQuesId) {
          userDataFromLocalStorage.splice(xindex, 1);
          //update local storage
          localStorage.clear();
          localStorage.setItem(key, JSON.stringify(userDataFromLocalStorage));

          //update question area
          updateQuestionArea();
          makeThemListen();
          //update response area
          responseForm.style.display = "none";
          // responseForm.style.display = "none";
          // questionArea.innerHTML = "";
        }
      });
    } else if ((e.target.id = "btnno")) {
      modal.style.display = "none";
      return;
    }
  });
});

//return a random number between 1 and 999 as id for each question might helpful for later use
function getUniqueId() {
  return Math.floor(Math.random() * 9999999);
}
