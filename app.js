const burger = document.getElementsByClassName("burger")[0]; //Gets the burger button object
const nav = document.getElementsByClassName("nav-links")[0]; //Gets the unoordered list of links in the nav-bar
const logo = document.getElementsByClassName("navbar-main")[0];// Gets the container div of logo and burger button
const navbar = document.getElementsByClassName("navbar")[0];

window.onscroll = function() {myFunction()};

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
burger.addEventListener("click", () => {
	nav.classList.toggle("active"); //triggers active class of nav-links
	logo.classList.toggle("active"); // triggers active class of logo
});