///////////////////////////////////////////////////////////
// Make Mobile navigation work

const btnNavEL = document.querySelector(".mobile-nav__btn");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Leaflet.js map
const mapCanada = L.map("mapCanada").setView([43.7093, -79.2449], 15);

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mapCanada);

// 12/-33.1168/151.6566  australia

// ap=15/53.7329/-1.3337   Uk
