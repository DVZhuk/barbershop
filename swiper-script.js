var swiperClass = document.querySelector(".features__swiper");
var swiperWrapperClass = document.querySelector(".features__about");
var swiperSlides = document.querySelectorAll(".about__item");


// Инициализация свайпера особенностей
// Если ширина окна меньше
if (window.innerWidth < 768) {
  swiperClass.classList.add('swiper');
  swiperWrapperClass.classList.add('swiper-wrapper');
  for (let swiperSlideClass of swiperSlides) {
    swiperSlideClass.classList.add('swiper-slide');
  };
  // Инициализация библиотеки свайпера
  new Swiper('.features__swiper', {
    pagination: {
      el: '.features__pagination',
      clickable: true,
    },
  });
};
// Инициализация свайпера особенностей отзывов
new Swiper('.news-reviews__reviews', {
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.reviews__arrow--right',
    prevEl: '.reviews__arrow--left'
  },
  simulateTouch: false,
});



// Изменение свойств при изменении размера экрана
window.onresize = function() {
  if (window.innerWidth >= 767) {
    // Отключение свайпера особенностей,
    // для экранов шире мобильного
    swiperClass.classList.remove('swiper');
    swiperWrapperClass.classList.remove('swiper-wrapper');
    for (let swiperSlideClass of swiperSlides) {
      swiperSlideClass.classList.remove('swiper-slide');
      swiperSlideClass.removeAttribute('style');
    };
  }
};
