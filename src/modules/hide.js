function toggleVisibility(button, slides, icon) {
    let isVisible = true;
  
    function toggleListVisibility() {
      slides.classList.toggle('visible');
      isVisible = !isVisible;
      button.innerHTML = isVisible ? 'Скрыть' : 'Показать все';
      icon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  
    button.addEventListener('click', toggleListVisibility);
  }
  
  const footer1 = document.querySelector('.swiper-showed');
  const slides1 = document.querySelector('.swiper-wrapper');
  const button1 = document.querySelector('.swiper-footer__text');
  const icon1 = document.querySelector('.swiper-footer__img');
  toggleVisibility(button1, slides1, icon1);
  
  const footer2 = document.querySelector('.swiper-showed2');
  const slides2 = document.querySelector('.swiper2');
  const button2 = document.querySelector('.swiper-footer__text2');
  const icon2 = document.querySelector('.swiper-footer__img2');
  toggleVisibility(button2, slides2, icon2);
  


const itemStatus = document.querySelector('.item-status');
const itemStatus2 = document.querySelector('.item-status2');
const itemStatus3 = document.querySelector('.item-status3');
const itemRequest = document.querySelector('.item-request');
const itemRequest2 = document.querySelector('.item-request2');
const itemRequest3 = document.querySelector('.item-request3');
const modalCross = document.querySelector('.modal-crosshair1');
const modalCross2 = document.querySelector('.modal-crosshair2');
const modalStatus = document.querySelector('.modal-s');
const modalRequest = document.querySelector('.modal-r');
const modalBg1 = document.querySelector('.modal-bg1');
const modalBg2 = document.querySelector('.modal-bg2');

//Modal Status
itemStatus.addEventListener('click', () => {
    modalStatus.classList.toggle('absolute-status');
});

itemStatus2.addEventListener('click', () => {
    modalStatus.classList.toggle('absolute-status');
});

itemRequest3.addEventListener('click', () => {
    modalRequest.classList.toggle('absolute-status');
});

itemStatus3.addEventListener('click', () => {
    modalStatus.classList.toggle('absolute-status');
});

itemRequest2.addEventListener('click', () => {
    modalRequest.classList.toggle('absolute-status');
});

modalBg1.addEventListener('click', () => {
    modalStatus.classList.toggle('absolute-status');
});

modalCross.addEventListener('click', () => {
    modalStatus.classList.toggle('absolute-status');
});

//Modal Request
itemRequest.addEventListener('click', () => {
    modalRequest.classList.toggle('absolute-status');
});

modalBg2.addEventListener('click', () => {
    modalRequest.classList.toggle('absolute-status');
});

modalCross2.addEventListener('click', () => {
    modalRequest.classList.toggle('absolute-status');
});



    //sidebar  768 - max
    const side = document.querySelector('.side');
    const fontA = document.querySelector('.font');
    const sideBg = document.querySelector('.sidebar-bg');
    const sidebarHeaderLink = document.querySelector('a.sidebar-header__link');
    const showBurger = document.querySelector('.show-burger1');
    const showBurger2 = document.querySelector('.items.show-burger2');

    function toggleActions() {
        side.classList.toggle('actions');
        fontA.classList.toggle('actions');
        sideBg.classList.toggle('actions');
    }
    
    showBurger.addEventListener('click', toggleActions);
    sidebarHeaderLink.addEventListener('click', toggleActions);
    sideBg.addEventListener('click', toggleActions);

    

    const sidebarHeader = document.querySelector('.show-burger2');

    var breakpoint320 = window.matchMedia('(min-width: 320px)');
    var breakpoint768 = window.matchMedia('(max-width: 769px)');

    sidebarHeader.addEventListener('click', () => {
        if (breakpoint320.matches && breakpoint768.matches) {
            side.classList.toggle('actions');
            fontA.classList.toggle('actions');
            sideBg.classList.toggle('actions');
        } else {
            side.classList.toggle('actions');
            fontA.classList.toggle('actions');
            sideBg.classList.toggle('actions');
        }
    });