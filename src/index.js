import "@babel/polyfill";
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/modules';
import {Pagination} from 'swiper/modules';
import './index.html';
import './index.scss';
import './modules/hide'


var swipers = {}; // Создаем объект для хранения экземпляров Swiper
var breakpoints = {
  768: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  992: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 40
  }
};

function initSwiper(containerClass, paginationClass) {
  swipers[containerClass] = new Swiper('.' + containerClass, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination-' + paginationClass,
      clickable: true,
    },
    breakpoints: breakpoints,
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
    destroySwiper('swiper1'); // Уничтожаем Swiper 1
    // Уничтожаем Swiper 2 и 3, если они есть
    destroySwiper('swiper2');
    destroySwiper('swiper3');
  } else {
    initSwiper('swiper1', 1); // Инициализируем Swiper 1 с пагинацией 1
    // Инициализируем Swiper 2 и 3, если они есть
    initSwiper('swiper2', 2);
    initSwiper('swiper3', 3);
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);












