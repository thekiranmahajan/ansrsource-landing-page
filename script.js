const openBtn = document.getElementById("navOpenBtn");
const closeBtn = document.getElementById("navCloseBtn");

const openMobileMenu = () => {
  openBtn.setAttribute("aria-expanded", "true");
};

const closeMobileMenu = () => {
  openBtn.setAttribute("aria-expanded", "false");
};

openBtn.addEventListener("click", openMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);
