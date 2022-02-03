$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
  });
  //Слайдер hotel
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
  
  //Слайдер reviews
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
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".modal__overlay").removeClass("modal__overlay--visible");
      $(".modal__dialog").removeClass("modal__dialog--visible");
    }
  });

  //Обработка формы
  $('.modal__form').vali
});