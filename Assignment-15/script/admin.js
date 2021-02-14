const adminLoginBtn = document.getElementById("admin-login");
const discussionSection = document.getElementById("discussion");
const logout = document.getElementById("logout");
const username = document.getElementById("username");
const password = document.getElementById("password");
const totalUsers = document.getElementById("total-users");
const totalQuesAsked = document.getElementById("total-ques-asked");
const totalResponses = document.getElementById("total-response");
const subjectWise = document.getElementById("subject-wise");
const userWise = document.getElementById("user-wise");

const key = "allUserData";
const userDataFromLocalStorage = JSON.parse(localStorage.getItem(key)) || [];
adminLoginBtn.addEventListener("click", function () {
  var responseCount = 0;
  discussionSection.style.display = "none";
  username.style.display = "none";
  password.style.display = "none";
  adminLoginBtn.style.display = "none";
  logout.style.display = "block";
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "subject-wise-heading");
  h1.textContent = "Subjects";
  subjectWise.appendChild(h1);
  const ul = document.createElement("ul");
  const h11 = document.createElement("h1");
  ul.setAttribute("class", "subject-list");
  h11.textContent = "User";
  userWise.appendChild(h11);
  subjectWise.appendChild(ul);

  if (userDataFromLocalStorage.length === 0) {
    alert("1");
  } else {
    console.log(userDataFromLocalStorage);
    totalUsers.textContent = `Total Users: ${userDataFromLocalStorage.length} `;
    totalUsers.style.backgroundColor = "var(--light-color-2)";
    totalQuesAsked.textContent = `Total Question Asked: ${userDataFromLocalStorage.length} `;
    totalQuesAsked.style.backgroundColor = "var(--light-color-3)";
    userDataFromLocalStorage.forEach(function (x, xindex) {
      responseCount += x.answers.length;
      var li = document.createElement("li");
      li.textContent = x.subject;
      ul.appendChild(li);
    });

    // console.log(subjectArray);
    totalResponses.textContent = `Total Response Submitted: ${responseCount} `;
    totalResponses.style.backgroundColor = "var(--light-color-2)";
  }
});
