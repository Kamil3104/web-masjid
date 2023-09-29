$(document).ready(function(){


$(".hamburger").click(function(){
  $(".top-menu ").css("right", "0");
});

$(".close").click(function(){ 
  $(".top-menu ").css("right", "-100vw");
});


$(".show-popup-infak").click(function(){
  $(".wprapper-popup").addClass('show');
})
$(".close-popup,.backdrop").click(function(){
  $(".wprapper-popup").removeClass('show');
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



var swiper = new Swiper(".Swiper-kegiatan", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
  navigation:{
    nextEl: ".swiper-kegiatan-button-next",
    prevEl: ".swiper-kegiatan-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
});