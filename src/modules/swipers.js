
var swipers = {};

function initSwiper(containerClass, paginationClass) {
  swipers[containerClass] = new Swiper('.' + containerClass, {
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination-' + paginationClass,
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        enabled: true,
      },
      768: {
        enabled: false,
      },
    },
  });
}

function destroySwiper(containerClass) {
  if (swipers[containerClass] !== undefined) {
    swipers[containerClass].destroy();
    delete swipers[containerClass];
  }
}


var breakpoint768 = window.matchMedia('(min-width: 768px)');

function checkScreenWidth() {
  if (breakpoint768.matches) {
    destroySwiper('swiper1');
    destroySwiper('swiper2');
    destroySwiper('swiper3');
  } else {
    initSwiper('swiper1', 1);
    initSwiper('swiper2', 2);
    initSwiper('swiper3', 3);
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);