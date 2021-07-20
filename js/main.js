// start menu toggle
let up = document.querySelector("#menu-bars");
let menu = document.querySelector("#on");
let nav = document.querySelector(".navbar");
up.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

let one = document.querySelectorAll(".one");
one.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".one.active").classList.remove("active");
    e.classList.add("active");
    nav.classList.toggle("active");
    menu.classList.toggle("fa-times");
  });
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
};
// end menu toggle
