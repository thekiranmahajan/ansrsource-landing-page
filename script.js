const openBtn = document.getElementById("navOpenBtn");
const closeBtn = document.getElementById("navCloseBtn");
const media = window.matchMedia("(max-width: 720px)");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll("[data-scroll]");
const currentYear = document.getElementById("currentYear");

// Dynamic Year
const year = new Date().getFullYear();
currentYear.textContent = year;

// toggling the inert attribute to hide nav-menu from screen readers and keyboard enhances the accessibility
const setupNavMenu = (e) => {
  if (e.matches) {
    navMenu.setAttribute("inert", "");
    navMenu.style.transition = "none"; //to avoid jitter of slow transition remove it ehrn on mobile
    console.log("Mobile");
  } else {
    navMenu.removeAttribute("inert");
    console.log("Desktop");
  }
};

//open menu
const openMobileMenu = () => {
  openBtn.setAttribute("aria-expanded", "true");
  navMenu.removeAttribute("inert");
  navMenu.removeAttribute("style");
};

//close menu
const closeMobileMenu = () => {
  openBtn.setAttribute("aria-expanded", "false");
  navMenu.setAttribute("inert", "");

  setTimeout(() => {
    navMenu.style.transition = "none";
  }, 500); //add it after a delay of 500ms
};

setupNavMenu(media); // start-up run
openBtn.addEventListener("click", openMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);

//eventListener to detect given media query from JS
media.addEventListener("change", (e) => {
  setupNavMenu(e);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (media.matches) {
      closeMobileMenu();
    }
  });
});
