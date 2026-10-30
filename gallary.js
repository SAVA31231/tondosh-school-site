const desktopQuery = window.matchMedia('(min-width: 640px)');

function handleScreenResize(event) { 
    if (event.matches) {
        galleryContainer.classList.add('show-all');
        moreBtn.textContent = 'Меньше';
    } else {
        galleryContainer.classList.remove('show-all');
        moreBtn.textContent = 'Больше';
    }
}

handleScreenResize(desktopQuery);
desktopQuery.addEventListener('change', handleScreenResize);