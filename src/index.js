import "@babel/polyfill";

import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/modules';
import {Pagination} from 'swiper/modules';
import './index.html';
import './index.scss';

import {sum, minus} from './modules/calc.js';


console.log(sum(3,6));
console.log(minus(9,1));


var swiper = null;

function initSwiper() {
  swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function destroySwiper() {
  if (swiper !== null) {
    swiper.destroy();
    swiper = null;
  }
}

var breakpoint768 = window.matchMedia('(min-width: 768px)');

function checkScreenWidth() {
  if (breakpoint768.matches) {
    destroySwiper();
  } else {
    initSwiper();
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);


  const hideBotton = document.querySelector('.footer-button_text');
  const hiddenSlides = document.querySelector('.swiper-wrapper');
  const hideIcon = document.querySelector('.footer-button_img');
  

  let isHidden = true;
  
  let showList = () => {
      hiddenSlides.classList.toggle('visible');
      hideBotton.innerHTML = 'Показать все';
      isHidden = false;
      hideIcon.style = 'transform: rotate(180deg)';
    }
    
    let hideList = () => {
        hiddenSlides.classList.toggle('visible');
        isHidden = true;
        hideBotton.innerHTML = 'Скрыть';
      hideIcon.style = 'transform: rotate(0deg)';
  }
  
  hideBotton.addEventListener('click', () => {
      if (isHidden) {
          showList();
      } else {
          hideList();
      }
  })



