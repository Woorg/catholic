import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import magnificPopup from 'magnific-popup';
// import slick from 'slick-carousel';
// import LazyLoad from 'vanilla-lazyload';

// import "webp-hero/dist-cjs/polyfills";
// import WebpMachine from "webp-hero/dist/webp-machine"
// import 'jquery-mask-plugin';
// import 'ion-rangeslider';
// import Dropzone from 'dropzone';

// import "jquery-mask-plugin";
// import bound from 'bounds.js';

(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #82B93C',
    'color: #fff',
    'display: inline-block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 16px',
      'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);


   /* 
      Lazyload images
    */


  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 50,
    use_native: true
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }


  // var webpMachine = new webpHero.WebpMachine();
  // webpMachine.polyfillDocument();


  $(function() {

    // Priority Nav

    // function calcWidth() {
    //   let navwidth = 0;
    //   let morewidth = $('.nav__item_more').outerWidth(true);
    //   $('.nav__list_main > li:not(.nav__item_more)').each(function() {
    //     navwidth += $(this).outerWidth( true );
    //   });
    //   let availablespace = $('.nav__list_main').outerWidth(true) - morewidth;
      
    //   if (navwidth > availablespace) {
    //     let lastItem = $('.nav__list_main > li:not(.nav__item_more)').last();
    //     lastItem.attr('data-width', lastItem.outerWidth(true));
    //     lastItem.prependTo($('.nav__list_main .nav__item_more ul'));
    //     calcWidth();
    //   } else {
    //     let firstMoreElement = $('.nav__list_main li.nav__item_more li').first();
    //     if (navwidth + firstMoreElement.data('width') < availablespace) {
    //       firstMoreElement.insertBefore($('.nav__list_main .nav__item_more'));
    //     }
    //   }
      
    //   if ($('.nav__item_more li').length > 0) {
    //     $('.nav__item_more').css('display','inline-block');
    //   } else {
    //     $('.nav__item_more').css('display','none');
    //   }
    // }

    // calcWidth();

    // $(window).on('resize load',function(){
    //   if ( $(window).width() > 300 )  {
    //     calcWidth();
    //   }
    // });



    // $('.nav__item_more').on('click', function () {
    //   $(this).toggleClass('nav__item-show');
    // });


    /*
    Slider
    */

    const $slider = $('.slider__object');

    if( $slider.length > 0 ) {
      $slider.slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        // appendArrows: ".container",
        prevArrow: $('.slider__arrow_prev'),
        nextArrow: $('.slider__arrow_next'),
        // loop: false,
        lazyLoad: 'ondemand',
        // infinite: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        speed: 600,
        // fade: true,
        // variableWidth: true,
        adaptiveHeight: false,
        // waitForAnimate: false,
        // focusOnSelect: true,

        responsive: [
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          }
        }]
      });
    }



    /*
      Slider
    */

    const $newsSlider = $('.latest-news__slider');

    if( $newsSlider.length > 0 ) {
      $newsSlider.slick({
        mobileFirst: true,
        dots: false,
        arrows: true,
        // appendArrows: ".container",
        // loop: false,
        vertical: true,
        verticalSwiping: true,
        // lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        speed: 600,
        centerMode: true,
        centerPadding: '20px',
        // fade: true,
        // variableWidth: true,
        adaptiveHeight: true,
        // waitForAnimate: false,
        // focusOnSelect: true,

        responsive: [
        // {
        //   breakpoint: 577,
        //   settings: {
        //     slidesToShow: 3,
        //   }
        // },
        {
          breakpoint: 834,
          settings: {
            slidesToShow: 3.6,
          }
        }]
      });
    }




    // function pageWidget(pages) {
    //   var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
    //   widgetWrap.prependTo("body");
    //   for (var i = 0; i < pages.length; i++) {
    //     $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    //   }
    //   var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
    //   widgetStilization.prependTo(".widget_wrap");
    // }
  
    // pageWidget([
    //   'index',
    // ]);



  });


    

})(jQuery);
