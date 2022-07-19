const toggler = document.getElementById("nav-toggler");
const mainMenu = document.getElementById("main-menu");

toggler.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});
