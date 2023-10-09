import "@babel/polyfill";
import Swiper from 'swiper';
import 'swiper/css';
import './index.html';
import './index.scss';

import {sum, minus} from './modules/calc.js';


console.log(sum(3,6));
console.log(minus(9,1));


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  });

  const hideBotton = document.querySelector('.footer-button_text');
  const hiddenSlides = document.querySelector('.services');
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

