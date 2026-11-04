burgerMenu.addEventListener('click', toggleMobileMenu);

const moreBtn = document.querySelector('.more'); 
const galleryContainer = document.querySelector('.gallary-pictures');

moreBtn.addEventListener('click', () => { 
    galleryContainer.classList.toggle('show-all');
    
    const isExpanded = galleryContainer.classList.contains('show-all');
    moreBtn.textContent = isExpanded ? 'Меньше' : 'Больше';
});
