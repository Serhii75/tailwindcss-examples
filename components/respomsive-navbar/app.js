const navToggler = document.getElementById("nav-toggler");
const mainMenu = document.getElementById("main-menu");

navToggler.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
