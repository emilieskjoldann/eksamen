// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

var burger = document.querySelector("#burgerlogo");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    burger.src = "billeder/cross.svg";
  } else {
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    burger.src = "billeder/menu-burger.svg";
  }
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

window.addEventListener("resize", fjernClass);

function fjernClass() {
  if (window.innerWidth < 992) {
    menu.classList.remove("shown");
  }
}
