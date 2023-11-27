(function(){

const menuBtn = document.querySelector('#menu-btn');

const  menu = document.querySelector('#menu');

const body = document.querySelector('body');

const cookie = document.querySelector('.cookie');

const cookieBtn = document.querySelectorAll('.cookie-btn');







menuBtn.addEventListener('click', ()=>{

    menuBtn.classList.toggle('open');

    menu.classList.toggle('flex')

    menu.classList.toggle('hidden')

    body.classList.toggle('overflow-hidden')



})

window.onload = function (){

  cookie.style.left = 0;

}

cookieBtn.forEach(btn=>{

  btn.addEventListener('click', function () {

      cookie.style.left = '-120%';

  })

})





// swiper



const swiper = new Swiper('.swiper', {



  loop: true,

  spaceBetween: 32,

  grabCursor:true,



  pagination: {

    el: '.swiper-pagination',

    clickable:true,

    dynamicBullets: true,

  },



  // Navigation arrows

  navigation: {

    nextEl: '.swiper-button-next',

    prevEl: '.swiper-button-prev',

  },



//breakpoints

breakPoints: {

     768: {

        slidesPerView: 2,

      },

      1024: {

        slidesPerView: 3,

      },

}

});

})();
