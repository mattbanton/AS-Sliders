// Home Hero Slider
$(document).ready(function () {
      var slider_wrapper = new Swiper(".slider-wrapper-hero", {
          wrapperClass: "slider-list-hero",
      slideClass: "slider-item-hero",
      navigation: {
        nextEl: '.next-slide-hero',
        prevEl: '.prev-slide-hero'
      },
      pagination: {
          type: 'bullets',
    el: '.pagination',
    clickable: true,

      },
  autoplay: {
          delay: 5000,
    disableOnInteraction: true,

      },
  speed: 4000,
  slidesPerView: 'auto',
  loop: true,

        on: {
          init: function () {
              var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
      ` .swiper-pagination-bullet{   background:#fff;
    margin-right:8px;
    transition:.2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
      ` .swiper-pagination-bullet:hover{   opacity:.7;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
      ` .swiper-pagination-bullet-active:hover{   opacity:1;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
      ` .swiper-pagination-fraction{   font-size:16px;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);var slide_imagewe_style = document.createElement('style'); slide_imagewe_style.type = 'text/css'; slide_imagewe_style.innerHTML =
      ` .slide-image{   transition:transform .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_imagewe_style);var slide_contentwe_style = document.createElement('style'); slide_contentwe_style.type = 'text/css'; slide_contentwe_style.innerHTML =
      ` .slide-content{   transition:opacity .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_contentwe_style);$('.slider-item').on('mouseover',function() {
    $(this).find('.slide-image-hero').css({
      'transform':'scale(1.1)',
    });
    $(this).find('.slide-content-hero').css({
      'opacity':'.8',
    });
  });
  $('.slider-item-hero').on('mouseout',function() {
    $(this).find('.slide-image-hero').css({
      'transform':'scale(1)',
    });
    $(this).find('.slide-content-hero').css({
      'opacity':'1',
    });
  });

          },
        },
      });
    });

// Team Slider 1
$(document).ready(function () {
      var slider_wrapper = new Swiper(".slider-wrapper-1", {
          wrapperClass: "slider-list-1",
      slideClass: "slider-item-1",
      navigation: {
        nextEl: '.next-slide-1',
        prevEl: '.prev-slide-1'
      },
      pagination: {
          type: 'bullets',
    el: '.pagination',
    clickable: true,

      },
  autoplay: false,
  slidesPerView: 'auto',
  loop: false,

        on: {
          init: function () {
              var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
      ` .swiper-pagination-bullet{   background:#fff;
    margin-right:8px;
    transition:.2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
      ` .swiper-pagination-bullet:hover{   opacity:.7;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
      ` .swiper-pagination-bullet-active:hover{   opacity:1;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
      ` .swiper-pagination-fraction{   font-size:16px;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);var slide_imagewe_style = document.createElement('style'); slide_imagewe_style.type = 'text/css'; slide_imagewe_style.innerHTML =
      ` .slide-image{   transition:transform .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_imagewe_style);var slide_contentwe_style = document.createElement('style'); slide_contentwe_style.type = 'text/css'; slide_contentwe_style.innerHTML =
      ` .slide-content{   transition:opacity .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_contentwe_style);$('.slider-item').on('mouseover',function() {
    $(this).find('.slide-image-1').css({
      'transform':'scale(1.1)',
    });
    $(this).find('.slide-content-1').css({
      'opacity':'.8',
    });
  });
  $('.slider-item-1').on('mouseout',function() {
    $(this).find('.slide-image-1').css({
      'transform':'scale(1)',
    });
    $(this).find('.slide-content-1').css({
      'opacity':'1',
    });
  });

          },
        },
      });
    });

// Team Slider 2
$(document).ready(function () {
      var slider_wrapper = new Swiper(".slider-wrapper-2", {
          wrapperClass: "slider-list-2",
      slideClass: "slider-item-2",
      navigation: {
        nextEl: '.next-slide-2',
        prevEl: '.prev-slide-2'
      },
      pagination: {
          type: 'bullets',
    el: '.pagination',
    clickable: true,

      },
  autoplay: false,
  slidesPerView: 'auto',
  loop: false,

        on: {
          init: function () {
              var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
      ` .swiper-pagination-bullet{   background:#fff;
    margin-right:8px;
    transition:.2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
      ` .swiper-pagination-bullet:hover{   opacity:.7;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
      ` .swiper-pagination-bullet-active:hover{   opacity:1;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
      ` .swiper-pagination-fraction{   font-size:16px;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);var slide_imagewe_style = document.createElement('style'); slide_imagewe_style.type = 'text/css'; slide_imagewe_style.innerHTML =
      ` .slide-image{   transition:transform .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_imagewe_style);var slide_contentwe_style = document.createElement('style'); slide_contentwe_style.type = 'text/css'; slide_contentwe_style.innerHTML =
      ` .slide-content{   transition:opacity .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_contentwe_style);$('.slider-item').on('mouseover',function() {
    $(this).find('.slide-image-2').css({
      'transform':'scale(1.1)',
    });
    $(this).find('.slide-content-2').css({
      'opacity':'.8',
    });
  });
  $('.slider-item-2').on('mouseout',function() {
    $(this).find('.slide-image-2').css({
      'transform':'scale(1)',
    });
    $(this).find('.slide-content-2').css({
      'opacity':'1',
    });
  });

          },
        },
      });
    });

// Team Slider 3
$(document).ready(function () {
      var slider_wrapper = new Swiper(".slider-wrapper-3", {
          wrapperClass: "slider-list-3",
      slideClass: "slider-item-3",
      navigation: {
        nextEl: '.next-slide-3',
        prevEl: '.prev-slide-3'
      },
      pagination: {
          type: 'bullets',
    el: '.pagination',
    clickable: true,

      },
  autoplay: false,
  slidesPerView: 'auto',
  loop: false,

        on: {
          init: function () {
              var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
      ` .swiper-pagination-bullet{   background:#fff;
    margin-right:8px;
    transition:.2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
      ` .swiper-pagination-bullet:hover{   opacity:.7;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
      ` .swiper-pagination-bullet-active:hover{   opacity:1;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
      ` .swiper-pagination-fraction{   font-size:16px;
   } `;
      document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);var slide_imagewe_style = document.createElement('style'); slide_imagewe_style.type = 'text/css'; slide_imagewe_style.innerHTML =
      ` .slide-image{   transition:transform .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_imagewe_style);var slide_contentwe_style = document.createElement('style'); slide_contentwe_style.type = 'text/css'; slide_contentwe_style.innerHTML =
      ` .slide-content{   transition:opacity .2s;
   } `;
      document.getElementsByTagName('head')[0].appendChild(slide_contentwe_style);$('.slider-item').on('mouseover',function() {
    $(this).find('.slide-image-3').css({
      'transform':'scale(1.1)',
    });
    $(this).find('.slide-content-3').css({
      'opacity':'.8',
    });
  });
  $('.slider-item-3').on('mouseout',function() {
    $(this).find('.slide-image-3').css({
      'transform':'scale(1)',
    });
    $(this).find('.slide-content-3').css({
      'opacity':'1',
    });
  });

          },
        },
      });
    });
