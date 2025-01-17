const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    [menu, menuNav, menuBranding, ...navItems].forEach((item) =>
      item.classList.add("show")
    );
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    [menu, menuNav, menuBranding, ...navItems].forEach((item) =>
      item.classList.remove("show")
    );
    showMenu = false;
  }
}
