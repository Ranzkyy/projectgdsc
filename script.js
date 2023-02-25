// SCROLL TOP
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('scroll-active', window.scrollY >= 300);
});
// BACKGROUND NAVBAR
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header-active', window.scrollY > 50);
});
// HAMBURGER
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('open-menu');
  menu.classList.toggle('move');
};
window.onscroll = () => {
  navbar.classList.remove('open-menu');
  menu.classList.remove('move');
};
// DARK-THEME
const darkToggle = document.querySelector('#dark');

darkToggle.addEventListener('click', () => document.body.classList.toggle('darkmode'));

darkToggle.onclick = function () {
  if (document.body.classList.contains('darkmode')) {
    darkToggle.classList = 'bx bx-sun';
  } else {
    darkToggle.classList = 'bx bx-moon';
  }
};
