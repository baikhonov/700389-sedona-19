let menu = document.querySelector(".site-list");
let menuToggle = document.querySelector(".page-header__toggle");

menuToggle.addEventListener("click", function() {
  menuToggle.classList.toggle("page-header__toggle--activated");
  menu.classList.toggle("site-list--activated");
});

// Polyfill for IE to support SVG sprite
svg4everybody();
