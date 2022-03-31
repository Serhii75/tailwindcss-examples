const mobileNavToggler = document.getElementById('nav-toggler');
const mobileNav = document.getElementById('mobile-nav');

mobileNavToggler.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});