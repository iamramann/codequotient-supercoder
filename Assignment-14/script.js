const txt = document.getElementById("txt");
const compile_btn = document.getElementById("compile");
const result = document.getElementById("result");
const lang = document.getElementById("lang");
const waitTime = 10000;
const userChoice = JSON.parse(localStorage.getItem("userChoice"));
const key = "userChoice";

(function () {
  alert(
    "check console if no output is displyed it is beacuse of cors policy ohterwise ignore this message"
  );
})();

//handle when user select his default choice set by getDefaultValuesFromLocalStorage() when first time user enters its code ... in our case it is CPP
lang.addEventListener("change", function () {
  if (localStorage.getItem(key) != null && userChoice.langId === lang.value)
    getDefaultValuesFromLocalStorage();
  else return lang.value;
});

//handle compile button click event here
compile_btn.addEventListener("click", function (event) {
  var codeId = null;

  if (txt.value.trim().length === 0) {
    alert("Please Provide some code");
    return;
  } else {
    txt.disabled = true;
    lang.disabled = true;

    //change compile_btn behaviour when button is pressed
    compile_btn.removeAttribute("class");
    compile_btn.setAttribute("class", "buttonload");
    compile_btn.innerHTML = ` <i class="fa fa-refresh fa-spin"></i>&nbsp;&nbsp;Loading`;

    //store user-input and language-choice in an object
    var dataToSend = { code: txt.value.trim(), langId: lang.value };

    //set defualt value for later use if not set already
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(dataToSend));
    }

    //open a XHR to get codeId
    var xhr1 = new XMLHttpRequest();
    xhr1.open("POST", "https://codequotient.com/api/executeCode");
    xhr1.setRequestHeader("Content-Type", "application/json");
    xhr1.send(JSON.stringify(dataToSend));
    const xhr1Timer = setTimeout(function () {
      let parseData = JSON.parse(xhr1.responseText);
      codeId = parseData.codeId;
    }, 5000);

    const xhr2Timer = setTimeout(function () {
      var xhr2 = new XMLHttpRequest();
      xhr2.open("GET", `https://codequotient.com/api/codeResult/${codeId}`);
      xhr2.send();
      const xhr2InternalTimer = setTimeout(function () {
        handleElementsBehaviour();
        const parseResponse = JSON.parse(xhr2.responseText);
        const parseObject = JSON.parse(parseResponse.data);
        var output = null;
        console.log(parseObject);

        if (parseObject.output.length != 0) output = parseObject.output;
        else output = `error: ${parseObject.errors}`;

        setTimeout(function () {
          compile_btn.style.backgroundColor = "#e0a800";
          compile_btn.textContent = "Compile";
        }, 1000);

        result.textContent = output;
      }, 1000);
    }, 6000);
  }
});

//utility function
function handleElementsBehaviour() {
  compile_btn.removeAttribute("class");
  compile_btn.setAttribute("class", "btn");
  compile_btn.style.backgroundColor = "#4CAF50";
  compile_btn.innerHTML = "Success!!";
  txt.disabled = false;
  lang.disabled = false;
}

//set user's first choice as default value in the language and text field
function getDefaultValuesFromLocalStorage() {
  txt.value = userChoice.code;
  document.getElementById(userChoice.langId).selected = true;
}
