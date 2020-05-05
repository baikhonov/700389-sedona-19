var nav = document.querySelector(".main-nav");
var menu = document.querySelector(".site-list");
var menuToggle = document.querySelector(".main-nav__toggle");

menuToggle.addEventListener("click", function() {
  menuToggle.classList.toggle("main-nav__toggle--activated");
  menu.classList.toggle("site-list--activated");
  nav.classList.toggle("main-nav--activated");
});

// Polyfill for IE to support SVG sprite
svg4everybody();
