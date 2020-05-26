const burger = document.getElementsByClassName("burger")[0]; //Gets the burger button object
const nav = document.getElementsByClassName("nav-links")[0]; //Gets the unoordered list of links in the nav-bar
const logo = document.getElementsByClassName("navbar-main")[0];// Gets the container div of logo and burger button

burger.addEventListener("click", () => {
	nav.classList.toggle("active"); //triggers active class of nav-links
	logo.classList.toggle("active"); // triggers active class of logo
});