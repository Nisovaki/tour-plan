$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
  });

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


  // modal
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $
  modalButton.on("click", openModal);
  
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
});