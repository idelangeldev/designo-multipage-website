///////////////////////////////////////////////////////////
// Make Mobile navigation work

const btnNavEL = document.querySelector(".mobile-nav__btn");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Leaflet.js map

const mapCanada = L.map("mapCanada").setView([43.7093, -79.2449], 14);

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mapCanada);

// 12/-33.1168/151.6566  australia

// ap=15/53.7329/-1.3337   Uk

///////////////////////////////////////////////////////////
// CONTACT FORM

// const contactForm = document.getElementById("contact-form");
// const names = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const messages = document.getElementById("message");

// // Show input error message
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "contact-form__group error";
//   const small = formControl.querySelector("contact-form__error");
//   small.innerText = message;
// }

// function checkRequired(inputArr) {
//   inputArr.forEach(function (input) {
//     if (input.value.trim() === "") {
//       showError(input, "is required");
//     }
//   });
// }

// // Event Listeners
// contactForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   checkRequired([names, email, phone, messages]);
// });
