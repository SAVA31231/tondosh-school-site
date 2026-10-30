const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('#primary-nav');
const headerElement = document.querySelector('header');

function toggleMobileMenu() { 
    navMenu.classList.toggle('is_open'); 
    headerElement.classList.toggle('is_press');
    burgerMenu.classList.toggle('is_open');
    document.body.classList.toggle('no-scroll');
}

burgerMenu.addEventListener('click', toggleMobileMenu);

const moreBtn = document.querySelector('.more'); 
const galleryContainer = document.querySelector('.gallary-pictures');

moreBtn.addEventListener('click', () => { 
    galleryContainer.classList.toggle('show-all');
    
    const isExpanded = galleryContainer.classList.contains('show-all');
    moreBtn.textContent = isExpanded ? 'Меньше' : 'Больше';
});