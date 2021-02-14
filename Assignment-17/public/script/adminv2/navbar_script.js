(function () {
  //iife to handle burger icon click events
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", function (e) {
    //active navbar on click to burger icon
    nav.classList.toggle("nav-active");

    //links animation
    navLinks.forEach(function (x, xindex) {
      if (x.style.animation) {
        x.style.animation = "";
      } else {
        x.style.animation = `navLinksFade 0.5s ease forwards ${
          xindex / 7 + 0.5
        }s`;
      }
    });
    //hamburger animation
    burger.classList.toggle("toggle");
  });
})();

const navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach((link, index) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((x, xindex) => {
      if (x.classList.contains("active-link")) {
        x.classList.remove("active-link");
      }
    });
    link.classList.add("active-link");
  });
});
