const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    540:  { slidesPerView: 2 },
    860:  { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  }
});