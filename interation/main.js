// const imgContainer = document.querySelector('.container');
// const imgs = document.querySelectorAll('img');
// let idx = 0,index=0;

//const { default: Swiper } = require("swiper");

// imgs[0].classList.add('active'); // Adiciona a classe "active" à primeira imagem inicialmente
// function carrossel() {
//   const currentImg = imgs[idx];
//   const nextIdx = (idx + 1) % imgs.length;
//   const nextImg = imgs[nextIdx]; 

//   currentImg.classList.remove('active');
//   nextImg.classList.add('active');

//   idx = nextIdx;
// }
var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true, 
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

