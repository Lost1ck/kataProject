const hideBotton = document.querySelector('.swiper-footer__text');
const hiddenSlides = document.querySelector('.swiper-wrapper');
const hideIcon = document.querySelector('.swiper-footer__img');

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
});


    const swiperFooter = document.querySelector('.swiper-showed');
    const hiddenSlides2 = document.querySelector('.swiper2');
    const hideBotton2 = document.querySelector('.swiper-footer__text2');
    const hideIcon2 = document.querySelector('.swiper-footer__img2');

    let isActive = true;

    let showCards = () => {
        hiddenSlides2.classList.toggle('visible');
        hideBotton2.innerHTML = 'Показать все';
        isActive = false;
        hideIcon2.style = 'transform: rotate(180deg)';
      }
      
      let hideCards = () => {
        hiddenSlides2.classList.toggle('visible');
        isActive = true;
        hideBotton2.innerHTML = 'Скрыть';
        hideIcon2.style = 'transform: rotate(0deg)';
    }
    
    hideBotton2.addEventListener('click', () => {
        if (isActive) {
            showCards();
        } else {
            hideCards();
        }
    });







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
        console.log('123');
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

    showBurger.addEventListener('click', () => {
        side.classList.toggle('actions');
        fontA.classList.toggle('actions');
        sideBg.classList.toggle('actions');
    });

    sidebarHeaderLink.addEventListener('click', () => {
        side.classList.toggle('actions');
        fontA.classList.toggle('actions');
        sideBg.classList.toggle('actions');
    });

    sideBg.addEventListener('click', () => { 
        side.classList.toggle('actions');
        fontA.classList.toggle('actions');
        sideBg.classList.toggle('actions');
    });

    

    const sidebarHeader = document.querySelector('.show-burger2');

    var breakpoint320 = window.matchMedia('(width: 320px)');

    sidebarHeader.addEventListener('click', () => {
        if (breakpoint320.matches) {
            side.classList.toggle('actions');
            fontA.classList.toggle('actions');
        } else {
            side.classList.toggle('actions');
            fontA.classList.toggle('actions');
            sideBg.classList.toggle('actions');
        }
    });