$(document).ready(function () {
  var hotelSwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-swiper__button--next',
    prevEl: '.hotel-swiper__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

var reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

// parallax
$('.parallax-window').parallax({ imageSrc: 'img/newsletter/newsletter-bg.jpeg' });

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
 });

var modalButton = $('[data-toggle=modal]')
modalButton.on('click', function () {
  
})

function openModal(params) {
  
}
});