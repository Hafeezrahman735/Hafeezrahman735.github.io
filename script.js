const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");
const header = document.querySelector('.header');

navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
    });
});


window.addEventListener(
    "resize", () => {
    if (document.body.clientWidth > 600) {
        nav.classList.remove("open");
        navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
        });
        navOpenIcon.classList.add("hidden");
    }
    },
    { passive: false }
);

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = '#36454F';
	}
});

function submitButton() {
    let x = document.getElementById("submit").innerHTML;
    document.getElementById("submit").innerHTML = "Thank You";

    setTimeout(function () {
    document.getElementById('submit').innerHTML = x;
    }, 3000);
}
