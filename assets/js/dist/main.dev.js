"use strict";

(function ($) {
  "use strict"; // Preloader

  jQuery(window).on('load', function () {
    //jQuery(".preloader").fadeOut(1000);
    $(".preloader").delay(1600).fadeOut("slow");
  });
  $(document).ready(function () {
    // mobile menu
    $('.hamburger').click(function (event) {
      $(this).toggleClass('h-active');
      $('.main-nav').toggleClass('slidenav');
    });
    $('.header-home .main-nav ul li  a').click(function (event) {
      $('.hamburger').removeClass('h-active');
      $('.main-nav').removeClass('slidenav');
    });
    $(".main-nav .fl").on('click', function (event) {
      var $fl = $(this);
      $(this).parent().siblings().find('.sub-menu').slideUp();
      $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");

      if ($fl.hasClass('flaticon-plus')) {
        $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
      } else {
        $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
      }

      $fl.next(".sub-menu").slideToggle();
    });
  }); // sticky navabr js

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  }); //Member Social icon toggle

  var memberToggle = document.querySelectorAll(".toggle-icon");
  memberToggle.forEach(function (el) {
    el.addEventListener('click', function () {
      var memberSocialIcons = el.nextElementSibling;
      memberSocialIcons.classList.toggle("toggle-active");
    });
  });
  $('.main-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    smartSpeed: 700,
    dots: false,
    nav: true,
    autoplay: 6000,
    // autoplayTimeout:4000,
    // autoplayHoverPause:true,
    // animateIn: 'fadeIn',
    // animateOut: 'fadeOut', 
    navText: ["<i class='flaticon-arrow-pointing-to-left' ></i>", "<i class='flaticon-arrow-pointing-to-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false
      },
      600: {
        items: 1,
        nav: false,
        dost: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  }); // feature slider

  $('.review-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    nav: true,
    navText: ["<i class='flaticon-arrow-pointing-to-left' ></i>", "<i class='flaticon-arrow-pointing-to-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false
      },
      600: {
        items: 1,
        nav: false,
        dots: false
      },
      1000: {
        items: 1,
        dots: false,
        nav: true,
        loop: true
      }
    }
  }); // feature slider

  $('.client-slider').owlCarousel({
    items: 5,
    loop: true,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false
      },
      550: {
        items: 3,
        nav: false,
        dots: false
      },
      750: {
        items: 4,
        nav: false,
        dots: false
      },
      1000: {
        items: 5,
        dots: false,
        nav: false,
        loop: true
      }
    }
  });
})(jQuery);