const navLinks = document.querySelectorAll(".nav-list a span");
const openMenu = document.getElementById("openMenu")
const responsiveNav = document.querySelector(".nav-list")

openMenu.addEventListener("click", function() {
  responsiveNav.classList.toggle("active");
  openMenu.classList.toggle("fa-x")
  openMenu.classList.toggle("active")
})

navLinks.forEach((e) => {
  e.addEventListener("click", function () {
    navLinks.forEach((links) => {
      links.classList.remove("active");
    });
    e.classList.add("active");
  });
});

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
      loadingScreen.classList.add("hidden");

      setTimeout(() => {
          loadingScreen.style.display = "none";
      }, 500);
  }, 2000);
});




