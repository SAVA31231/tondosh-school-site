const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('#primary-nav');
const headerElement = document.querySelector('header');

function toggleMobileMenu() { 
    navMenu.classList.toggle('is_open'); 
    headerElement.classList.toggle('is_press');
    burgerMenu.classList.toggle('is_open');
    document.body.classList.toggle('no-scroll');
}