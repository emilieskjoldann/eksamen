const btn = document.querySelector(".toggle-btn");

const menu = document.querySelector(".main-menu");

var burger = document.querySelector("#burgerlogo");

function toggleMenu() {
  menu.classList.toggle("shown");

  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    burger.src = "billeder/cross.svg";
  } else {
    burger.src = "billeder/menu-burger.svg";
  }
}

btn.addEventListener("click", toggleMenu);

window.addEventListener("resize", fjernClass);

function fjernClass() {
  if (window.innerWidth < 992) {
    menu.classList.remove("shown");
  }
}
