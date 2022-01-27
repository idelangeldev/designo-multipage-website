///////////////////////////////////////////////////////////
// Make Mobile navigation work

const btnNavEL = document.querySelector(".mobile-nav__btn");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
