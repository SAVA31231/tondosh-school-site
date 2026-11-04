const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0, 
    loop: true,
    
    pagination: { 
        el: '.swiper-pagination',
    }, 
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        560: { 
            slidesPerView: 2,  
        },
        860: { 
            slidesPerView: 3,
        },
        1200: { 
            slidesPerView: 4, 
        }
    }
});