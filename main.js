const burgerMenu = document.querySelector(".mobile-nav");
const drawer = document.querySelector(".mobile-nav+ul");

burgerMenu.addEventListener("click", handleClickOnBurger);

function handleClickOnBurger() {
  drawer.classList.toggle("open");
  burgerMenu.classList.toggle("open");
}

// Flag
// let isOpen = false;

// function handleClickOnBurgerMenu(e) {
//   if (!isOpen) {
//     drawer.classList.add("open");
//     burgerMenu.classList.add("open");
//     isOpen = true;
//   } else {
//     drawer.classList.remove("open");
//     burgerMenu.classList.remove("open");
//     isOpen = false;
//   }
// }
