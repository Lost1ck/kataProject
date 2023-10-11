
// var swiper1 = null;
// var swiper2 = null;

// function initSwiper1() {
//   swiper1 = new Swiper('.swiper-1', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination-1',
//       clickable: true,
//     },
//   });
// }

// function initSwiper2() {
//   swiper2 = new Swiper('.swiper-2', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination-2',
//       clickable: true,
//     },
//   });
// }

// function destroySwiper() {
//   if (swiper1 !== null) {
//     swiper1.destroy();
//     swiper1 = null;
//   }
//   if (swiper2 !== null) {
//     swiper2.destroy();
//     swiper2 = null;
//   }
// }

// var breakpoint768 = window.matchMedia('(min-width: 768px)');

// function checkScreenWidth() {
//   if (breakpoint768.matches) {
//     destroySwiper();
//   } else {
//     initSwiper1();
//     initSwiper2();
//   }
// }

// window.addEventListener('load', checkScreenWidth);
// window.addEventListener('resize', checkScreenWidth);