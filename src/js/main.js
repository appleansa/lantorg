             const players = Plyr.setup('.js-player');
             const $menu = $('.j-mm-navi');
             const $isnavi = $('body');
             const $mnavitoggle = $('.j-mobile-toggle');


// show modal alert
    $('.modal__btn').on('click', function(e) {
         e.preventDefault();
           $('.modal-alert').addClass('active');
          setTimeout(function() {
               $('.modal-alert').removeClass('active');
          }, 2500);
    });   

    $(function() {
                $( '#dl-menu' ).dlmenu( );
            });     


             $(document).mouseup(e => {
                 if (!$menu.is(e.target) // if the target of the click isn't the container...
                     &&
                     $menu.has(e.target).length === 0 // ... nor a descendant of the container
                     &&
                     $mnavitoggle.has(e.target).length === 0)

                 {
                     $isnavi.removeClass('is-mnavi');
                     $mnavitoggle.children().removeClass('active');
                 }
             });

             $mnavitoggle.on('click', function() {
                 if ($isnavi.hasClass('is-mnavi')) {
                     $isnavi.removeClass('is-mnavi');
                     $mnavitoggle.children().removeClass('active');

                 } else {
                     $isnavi.addClass('is-mnavi');
                     $mnavitoggle.children().addClass('active');

                 }
             });


             var $page = $('html, body');

             $('.j-scrollto').click(function(e) {
                 e.preventDefault();

                 var ww = $(window).outerWidth();
                 var hdrHeight = $('.header').height();
                 var hdrmobileHeight = $('.header-mobile').height();
                 var tnaviHeight = $('.top-navi').height();
                 var target = $(this).attr('href');
                 var hdrDif = 0;
                 var scrollTo = $(this).position().left;

                 $(this).parent().scrollLeft(scrollTo);

                 $('.j-scrollto').removeClass('active');
                 $(this).toggleClass('active');

                 if (ww <= 992) {

                     $page.animate({
                         scrollTop: $(target).position().top - hdrmobileHeight - tnaviHeight
                     }, 1000);
                     return false;
                 } else {

                     $page.animate({
                         scrollTop: $(target).position().top - hdrHeight - tnaviHeight
                     }, 1000);
                     return false;
                 }
             });




             // header fixedtop
             $(document).on("scroll", function() {
                 var scroll = $(window).scrollTop();
                 // var height = $(window).height();

                 if ($(this).scrollTop() >= 71) {
                     $('.header, .j-top-navi').addClass('fixedTop');
                 } else {
                     $('.header, .j-top-navi').removeClass('fixedTop');
                 }
             });


           $(".j-scroll").click(function(e) {
            e.preventDefault();

            var target = $(this).attr('href');


            $('.j-scroll').removeClass('active');
            $(this).addClass('active');

    $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top - 150
    }, 1000);
});


            


             function appendNavi() {

                 var w = $(window).width();

                 if (w >= 975) {
                     $('.j-kb-navi-desktop').append($('#kb-navi'));

                     $('.mobile-accordion').removeClass('accordion');

                     $isnavi.removeClass('is-mnavi');
                     $mnavitoggle.children().removeClass('active');

                      $('.hc-menu > li').mouseenter(function() {
                     $('.hc-menu li').removeClass('active');
                     $(this).addClass('active');
                 })
                 .mouseleave(function() {
                      
                 });


                 } else {

                     $('.knowlege-slider-container').prepend($('#kb-navi'));
                     $('.mobile-accordion').addClass('accordion');
                     $('.mobile-accordion:eq(0)').addClass('active');
                 }
             }


             const $mdropdown = $('.mobile-dropdown');
             const mtoggle = $('.j-mm-togle');

             $(document).mouseup(e => {
                 if (!$mdropdown.is(e.target) // if the target of the click isn't the container...
                     &&
                     $mdropdown.has(e.target).length === 0 // ... nor a descendant of the container
                     &&
                     mtoggle.has(e.target).length === 0)

                 {
                     $mdropdown.removeClass('active');
                 }
             });


             $('.j-mm-togle').click(function(e) {
                 e.preventDefault();
                 var mdropdown = $(this).data('toggle');
                 // $('.mobile-dropdown').removeClass('active');
                 $('[data-modal-id="' + mdropdown + '"]').toggleClass('active');
             });


             $('.j-mm-close').click(function() {
                 $('.mobile-dropdown').removeClass('active');
             });



             $(document).on("click", ".accordion .accordion_tab", function() {
                 if ($(this).parent().hasClass("active")) {
                     $(this).parent().removeClass("active");
                     $(this).next().animate({ height: 'hide' }, 300);
                 } else {

                     $(".accordion .accordion_tab").parent().removeClass("active");
                     $(this).parent().addClass("active");
                     $(".accordion .accordion_content").slideUp(300);
                     $(this).next().animate({ height: 'show' }, 300);
                 }
             });

             $(document).on("click", ".accordion_single .accordion_tab", function() {
                 $(this).parent().toggleClass("active");
                     $('.j-slick').slick("reinit");
             });

             $('.accordion_single').each(function() {
                var elem = $(this).find('input[type=checkbox]');
                   if ( elem.prop('checked')) {
                        $(this).addClass('active');
                    }
             });


             $(".j-tabs-container").on("click", ".j-mt-btn:not(.active)", function() {

                 var scrollTo = $(this).offset().left;
                 $(this).parent().scrollLeft(scrollTo);


                 $(this)
                     .addClass("active")
                     .siblings()
                     .removeClass("active")
                     .closest(".j-tabs-container")
                     .find(".tab")
                     .removeClass("active")
                     .eq($(this).index())
                     .addClass("active");




             });

             appendNavi();


             var myMsSwiper = new Swiper('.ms-inner', {
                 loop: true,
                 autoHeight: true,
                 height: 400,
                 pagination: {
                     el: '.ms-pagination',
                 },
                 navigation: {
                     nextEl: '.ms-buttons .swiper-btn-next',
                     prevEl: '.ms-buttons .swiper-btn-prev',
                 },

                 breakpoints: {
                     992: {
                         slidesPerView: 2,
                         spaceBetween: 0,
                         height: '500',
                         updateOnWindowResize: true,
                         pagination: {
                             el: '.ms-navi-custom .swiper-progressbar',
                             type: 'progressbar',

                         },
                     }
                 },
                 on: {
                     init: function() {

                         var totalslide = $('.ms-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
                         $(".ms-navi .swiper-total-slides").html('0' + totalslide);

                         var slidewidth = $('.ms-slider .swiper-slide').width();
                         $('.ms .swiper-navi-compact').css({ 'left': slidewidth });

                     },

                     resize: function() {

                         var slidewidth = $('.ms-slider .swiper-slide').width();
                         $('.ms .swiper-navi-compact').css({ 'left': slidewidth });

                     }
                 }
             });

             myMsSwiper.on('slideChange', function() {
                 var activeslide = myMsSwiper.realIndex + 1;
                 $(".ms-navi .swiper-active-slides").html('0' + activeslide);
             });






             // var myPremsSwiper = undefined;

             // function initPremsSwiper() {
             //     var screenWidth = $(window).innerWidth();

             //     if (screenWidth < 992 && myPremsSwiper == undefined) {

             //         $('.j-pp-slider').each(function() {

             //             myPremsSwiper = new Swiper(this, {
             //                 loop: true,
             //                 autoHeight: true,

             //                 pagination: {
             //                     el: this.querySelector('.swiper-pagination'),
             //                     clickable: true,
             //                 },

             //                 breakpoints: {
             //                     768: {
             //                         slidesPerView: 2,
             //                         spaceBetween: 15,
             //                         updateOnWindowResize: true,
             //                     },
             //                 },
             //             });
             //         });

             //     } else if (screenWidth > 991 && myPremsSwiper != undefined) {

             //         $('.j-pp-slider').each(function() {

             //             myPremsSwiper.destroy();
             //             myPremsSwiper = undefined;

             //             this.querySelector('.swiper-wrapper').removeAttribute('style');
             //             this.querySelector('.swiper-slide').removeAttribute('style');

             //         });
             //     }
             // }

             // //Swiper plugin initialization
             // initPremsSwiper();




             var myClientsSwiper = new Swiper('.clients-slider', {
                 loop: true,
                 autoHeight: true,
                 spaceBetween: 0,
                 updateOnWindowResize: true,
                 pagination: {
                     el: '.clients-navi-custom .swiper-progressbar',
                     type: 'progressbar',
                 },
                 navigation: {
                     nextEl: '.clients-buttons .swiper-btn-next',
                     prevEl: '.clients-buttons .swiper-btn-prev',
                     loop: true,
                 },

                 on: {
                     init: function() {

                         var totalslide = $('.clients-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
                         $(".clients-navi .swiper-total-slides").html('0' + totalslide);

                     },
                 },
             });

             myClientsSwiper.on('slideChange', function() {
                 var activeslide = myClientsSwiper.realIndex + 1;
                 $(".clients-navi .swiper-active-slides").html('0' + activeslide);
             });

             // end clients slider


             var myReviewsSwiper = new Swiper('.reviews-slider', {
                 loop: true,
                 mode: 'horizontal',
                 autoHeight: true,
                 effect: 'fade',
                 autoplay: true,
                 autoplay: {
                     delay: 5000,
                 },
                 updateOnWindowResize: true,
                 pagination: {
                     el: '.reviews-navi .swiper-progressbar',
                     type: 'progressbar',
                 },
                 navigation: {
                     nextEl: '.reviews-navi .swiper-btn-next',
                     prevEl: '.reviews-navi .swiper-btn-prev',
                     loop: true,
                 },


                 on: {
                     init: function() {

                         var totalslide = $('.reviews-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
                         $(".reviews-navi .swiper-total-slides").html('0' + totalslide);

                     },
                 },
             });

             myReviewsSwiper.on('slideChange', function() {
                 var activeslide = myReviewsSwiper.realIndex + 1;
                 $(".reviews-navi .swiper-active-slides").html('0' + activeslide);
             });

             // end reviews slider


             var myNewsSwiper = new Swiper('.nm-slider', {
                 loop: true,
                 mode: 'horizontal',
                 autoHeight: true,
                 updateOnWindowResize: true,
                 pagination: {
                     el: '.nm-navi .swiper-progressbar',
                     type: 'progressbar',
                 },
                 navigation: {
                     nextEl: '.nm-navi .swiper-btn-next',
                     prevEl: '.nm-navi .swiper-btn-prev',
                     loop: true,
                 },

                 on: {
                     init: function() {

                         var totalslide = $('.nm-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
                         $(".nm-navi .swiper-total-slides").html('0' + totalslide);

                     },
                 },
             });

             myNewsSwiper.on('slideChange', function() {
                 var activeslide = myNewsSwiper.realIndex + 1;
                 $(".nm-navi .swiper-active-slides").html('0' + activeslide);
             });

             // endnm slider


             var myKnowlegeSwiper = new Swiper('.knowlege-slider', {
                 loop: true,
                 mode: 'horizontal',
                 slidesPerView: 2,
                 spaceBetween: 0,

                 pagination: {
                     el: '.knowlege-navi .swiper-progressbar',
                     type: 'progressbar',
                 },
                 navigation: {
                     nextEl: '.knowlege-navi .swiper-btn-next',
                     prevEl: '.knowlege-navi .swiper-btn-prev',
                     loop: true,
                 },

                 on: {
                     init: function() {

                         var totalslide = $('.knowlege-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
                         $(".knowlege-navi .swiper-total-slides").html('0' + totalslide);

                     },
                 },
             });

             myKnowlegeSwiper.on('slideChange', function() {
                 var activeslide = myKnowlegeSwiper.realIndex + 1;
                 $(".knowlege-navi .swiper-active-slides").html('0' + activeslide);
             });

             // end knowlege slider


             var myPartnersSwiper = new Swiper('.partners-container', {
                 loop: true,
                 slidesPerView: 'auto',
                 spaceBetween: 0,
                 centeredSlides: true,

                 pagination: {
                     el: '.partners-pagination',
                     clickable: true,
                 },

             });

             var pcElem = 0;

             document.querySelectorAll('.j-pc-branch').forEach(n => {

                 var catalogBranchSwiper = new Swiper(n, {
                     loop: true,
                     slidesPerView: 'auto',
                     spaceBetween: 0,
                     updateOnWindowResize: true,
                     pagination: {
                         el: '.pc-branch-pagination-'+pcElem,
                         clickable: true,
                     },
                     navigation: {
                         nextEl: '.j-pc-branch-navi-' + pcElem + ' .swiper-btn-next',
                         prevEl: '.j-pc-branch-navi-' + pcElem + ' .swiper-btn-prev',

                     },
                 });

                 pcElem++;

             });

             
                

               var jtabsElem = 0; 
               document.querySelectorAll('.j-tabs-slider').forEach(n => {

                 var tabsSwiper = new Swiper(n, {
                   //  loop: true,
                     slidesPerView: 'auto',
                     spaceBetween: 0,
                     observer: true,
                     observeParents: true,
                     updateOnWindowResize: true,
                     navigation: {
    nextEl: n.querySelector('.swiper-button-next'),
    prevEl: n.querySelector('.swiper-button-prev'),
  },
                    
                 });

                  jtabsElem++;

             });


             // micromodal init function
             MicroModal.init({
                awaitCloseAnimation: true
             });



             $('body').on('click', '.j-dropdown-open', function(e) {
                 e.preventDefault();

               //  $(this).toggleClass('active');

                 var popup = $(this).data('toggle');

                 console.log(popup);
                 
                 if (!$(this).hasClass('active')) {
                     $('.j-dropdown').removeClass('active');
                     $('[data-id="' + popup + '"]').addClass('active');
                     $(this).toggleClass('active');
                     $('.shadow').addClass('active');
                 } else {
                     $('[data-id="' + popup + '"]').removeClass('active');
                      $('.shadow').removeClass('active');
                      $(this).removeClass('active');
                 }
             });

             $('.hp-close').on('click', function() {
                   $('.shadow, .j-dropdown, .j-dropdown-open').removeClass('active');
             });

             $(document).mouseup(function(e) {
                 var popup = $('.j-dropdown, .j-dropdown-open, .shadow');
             

                 if (!popup.is(e.target) && popup.has(e.target).length === 0) {
                     popup.removeClass('active');
                 }
             });
 

             $('.hc-submenu_toggle').click(function() {
                  
                  $(this).toggleClass('active');
                  $(this).next().toggleClass('active');

                 //   var parent = $(this).parent('.parent');
                 // if (!$(parent).hasClass('active')) {
                 //     $('.parent').removeClass('active');
                 //      $(this).parent().addClass('active');

                    
                 // } else {
                 //      $(this).parent().removeClass('active');
                     
                 // }

             });



             // contacts slider 
             $(document).on('click', '.j-stuff-toggle', function() {
                 var sldr = $(this).data('target');
             });


             var sticky = new Sticky('.j-sticky');


             //             var myStuffSwiper = undefined;

             //             function initStuffSwiper() {
             //                 var screenWidth = $(window).innerWidth();
             //                 var sld = document.querySelectorAll('.j-stuff-slider');

             //                 if (screenWidth < 992 && myStuffSwiper == undefined) {

             //                  document.querySelectorAll('.j-stuff-slider').forEach(n => {
             //                     myStuffSwiper = new Swiper(n, {
             //                         loop: true,
             //                         centeredSlides: true,
             //                         slidesPerView: 'auto',
             //                         spaceBetween: 0,
             //                         adaptiveHeight: true,
             //                         pagination: {
             //                            el: n.querySelector('.swiper-pagination'),
             //                            clickable: true,
             //                         }
             //                     });
             //                 });


             // myStuffSwiper.update();


             //                 } else if (screenWidth > 991  ) { // && myStuffSwiper != undefined

             //                    myStuffSwiper.destroy(true, true);

             //                   //  myStuffSwiper.detachEvents();
             //                     myStuffSwiper = undefined;
             //                     // $('.j-stuff-slider').find('.swiper-wrapper').attr('style','');
             //                     // $('.j-stuff-slider').find('.swiper-slide').attr('style','');
             //                 }
             //             }

             //             //Swiper plugin initialization
             //             initStuffSwiper();


             //             $(window).on('resize', function() {
             //                    initStuffSwiper();
             //             });





             const settings = {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: true,
                 variableWidth: true,
                 arrows: false, 
                 speed: 200,
                 pauseOnHover: false,
                  touchThreshold: 5,
                 mobileFirst: true, 
                 responsive: [{
                         breakpoint: 992,
                         settings: 'unslick'
                     },
                     {
                         breakpoint: 600,
                         settings: {
                          
                             slidesToShow: 2,
                             slidesToScroll: 1
                         }
                     },
                     {
                         breakpoint: 400,
                         settings: {
                            
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     }

                 ]
             };

  // const ppsettings = {
  //                slidesToShow: 1,
  //                slidesToScroll: 1, 
  //                dots: true, 
  //                arrows: false,
  //                speed: 200,
  //              //  loop: false,
  //                 pauseOnHover: false,
  //             //   touchThreshold: 5,
  //             variableWidth: true,
  //                mobileFirst: true, 
  //                responsive: [{
  //                        breakpoint: 992,
  //                        settings: 'unslick'
  //                    },
  //                    {
  //                        breakpoint: 600,
  //                        settings: {
  //                            centerPadding: '15px',
  //                            slidesToShow: 2,
  //                            slidesToScroll: 2
  //                        }
  //                    },
  //                    {
  //                        breakpoint: 400,
  //                        settings: {
                            
  //                            slidesToShow: 1,
  //                            slidesToScroll: 1
  //                        }
  //                    }

  //                ]
  //            };

               
            const sl = $('.j-stuff-slider');
             // const ppsl = $('.j-pp-slick');
               
               $('.j-stuff-slider').each(function(i) {
                   $(this).slick(settings);
             });

             //      $('.j-pp-slick').each(function(i) {
             //       $(this).slick(settings);
             // });


             $(window).on('resize', function() {

                 if ($(window).width() < 992 && !sl.hasClass('slick-initialized')) {
                     
                     sl.slick(settings);
                 }

                 // if ($(window).width() < 992 && !ppsl.hasClass('slick-initialized')) {
                 //     $('.j-pp-slick').slick(ppsettings);
                 // }


             });

           
 

             var myUsSwiper = new Swiper('.j-us-slider', {
                 loop: true,
                 speed: 1000,
                 slidesPerView: 1,
                 spaceBetween: 0,
                 updateOnWindowResize: true,
                 pagination: {
                     el: '.us-pagination',
                     clickable: true,

                 },
                 navigation: {
                     nextEl: '#j-us-next',
                     prevEl: '#j-us-prev',
                 },
             });

             usbtnssize();



             function usbtnssize() {

                 var buttonH = $('.us-btns').height() / 2;
                 $('.us-btns').width(buttonH);

             }

             $(window).resize(function() {

                 appendNavi();
                 usbtnssize();
             });



             /// swiper 

             (function() {

                 'use strict';

                 const breakpoint = window.matchMedia('(min-width:992px)');

                 // keep track of swiper instances to destroy later
                 let mySwiper;
                 let myPremsSwiper;
                 let myReturnSwiper;
              //   let myStuffSwiper;

                 const breakpointChecker = function() {

                     // if larger viewport and multi-row layout needed
                    if ( breakpoint.matches === true ) {

                         if ($('.j-team-slider').length) {
                             if (mySwiper !== undefined) mySwiper.destroy(true, true);
                         }
                         // clean up old instances and inline styles when available
                         if ($('.j-pp-slider').length) {
                             if (myPremsSwiper !== undefined) myPremsSwiper.destroy(true, true);
                             myPremsSwiper = undefined;
                         }

                         if ($('.j-return-slider').length) {

                             if (myReturnSwiper !== undefined) myReturnSwiper.destroy(true, true);
                         }

                         //  if ($('.j-stuff-slider').length) {

                         //     if (myStuffSwiper !== undefined) myStuffSwiper.destroy(true, true);
                         // }


                          return;

                         // or/and do nothing
                         // else if a small viewport and single column layout needed
                     } else if (breakpoint.matches === false) {
                         // fire small viewport version of swiper
                           enableSwiper();
                          enablePremsSwiper();
                           enableReturnSwiper();
                      //   enableStuffSwiper();

                     }

                 };



                 const enableSwiper = function() {

                     mySwiper = new Swiper('.j-team-slider', {
                         loop: true,
                         slidesPerView: 2,
                         a11y: true,
                         keyboardControl: true,
                         grabCursor: true,
                         pagination: {
                             el: '.team-pagination',
                             clickable: true,
                         },

                     });
                 };


                 const enablePremsSwiper = function() {
                     document.querySelectorAll('.j-pp-slider').forEach(n => {
                         myPremsSwiper = new Swiper(n, {
                             loop: true,
                             autoHeight: true,
                             slidesPerView: 1,
                             pagination: {
                                 el: n.querySelector('.swiper-pagination'),
                                 clickable: true,
                             },

                             breakpoints: {
                                 768: {
                                     slidesPerView: 2,
                                     spaceBetween: 15,
                                     updateOnWindowResize: true,
                                 },
                             },
                         });
                     });
                 };


                 const enableReturnSwiper = function() {
                     document.querySelectorAll('.j-return-slider').forEach(n => {
                         var myReturnSwiper = new Swiper(n, {
                             loop: true,
                             mode: 'horizontal',
                             slidesPerView: 1,
                             spaceBetween: 0,
                             pagination: {
                                 el: n.querySelector('.swiper-progressbar'),
                                 type: 'progressbar',
                             },
                             navigation: {
                                 nextEl: n.querySelector('.swiper-btn-next'),
                                 prevEl: n.querySelector('.swiper-btn-prev'),
                                 loop: true,
                             },

                             on: {
                                 init: function() {

                                     var totalslides = n.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
                                     $(".return-navi .swiper-total-slides").html('0' + totalslides);

                                 },
                             },
                         });

                         myReturnSwiper.on('slideChange', function() {
                             var activeslide = myReturnSwiper.realIndex + 1;
                             $(".return-navi .swiper-active-slides").html('0' + activeslide);
                         });

                     });
                 };

                 //  const enableStuffSwiper = function() {
                 //     document.querySelectorAll('.j-stuff-slider').forEach(n => {
                 //         var myStuffSwiper = new Swiper(n, {
                 //             loop: true,
                 //             mode: 'horizontal',
                 //             slidesPerView: 1,
                 //             spaceBetween: 0,
                 //             pagination: {
                 //                 el: n.querySelector('.swiper-progressbar'),
                 //                 type: 'progressbar',
                 //             }, 
                 //             navigation: {
                 //                 nextEl: n.querySelector('.swiper-btn-next'),
                 //                 prevEl: n.querySelector('.swiper-btn-prev'),
                 //                 loop: true,
                 //             },

                           
                 //         });
                 //     });
                 // };

                 // keep an eye on viewport size changes
                 breakpoint.addListener(breakpointChecker);

                 // kickstart
                 breakpointChecker();

                 })(); /* IIFE end */ 


                 function responseMenu() {
                     $('ul.dropdown-menu li.item').appendTo('ul.menu');
                     var items = $('ul.menu li.item');
                     var max_width = $('ul.menu').outerWidth() - $('ul.menu li.dd_menu').outerWidth();
                     var width = 0;
                     var hide_from = 0;
                     var maxitems = items.length;




                     var ww = $(window).width();

                     items.css({ 'width': 'auto' });

                     items.each(function(index) {
                         if (width + $(this).outerWidth() >= max_width) {
                             return false;
                         } else {
                             hide_from = index;
                             width += $(this).outerWidth();
                         }
                     });


                     if (hide_from <= items.length - 1) {
                         items.eq(hide_from).nextAll('li.item').appendTo('ul.dropdown-menu');
                         //   items.css({'width':(max_width / (hide_from + 1)) + 'px'});
                         $('ul.menu li.dd_menu').show();
                     } else {
                         $('ul.menu li.dd_menu').hide();
                     }
                 }

                 $(document).ready(function() {
                     $('.j-sorter').on('click', '.dropdown-toggle', function() {
                         $('.dropdown-menu').toggle();


                     });



                     //  set banner order for catalog page
                     function setBannerOrder() {

                         var ww = $(window).outerWidth();
                         var elem = $('.pc-catalog-content .has-banner');
                         var elems = $('.pc-products .pc-item');

                         if (ww >= 991 && ww <= 1299) {
                             elems.eq(2).after(elem);
                         } else {
                             elems.eq(3).after(elem);
                         }
                     }


                     setBannerOrder();

                     $(window).on('resize', function() {
                         setTimeout(function() {
                             setBannerOrder();
                         }, 500);

                         setBannerOrder();



                     }).trigger('resize');
                 });

          



 
/// input number customization

$('.quantity').each(function( ) {
 
 

    var $quantityArrowMinus = $(this).find(".quantity-arrow-minus");
    var $quantityArrowPlus = $(this).find(".quantity-arrow-plus");
    var $quantityNum = $(this).find(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  });


/// inpur select customization

// Iterate over each select element
$('select').each(function () {
    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


// dropdown style

 function DropDown(el) {
                this.dd = el;
                this.placeholder = this.dd.children('span');
                 this.icon = this.dd.children('i');
                this.opts = this.dd.find('ul.dropdown > li');
                this.val = '';
                this.index = -1;
                this.initEvents();
            }
            DropDown.prototype = {
                initEvents : function() {
                    var obj = this;

                    obj.dd.on('click', function(event){
                        $(this).toggleClass('active');
                        
                        return false;
                    }); 

                    obj.opts.on('click',function(){
                        var opt = $(this);
                        var icon2 = opt.find('i').attr('style');
                        obj.val = opt.text();
                        obj.index = opt.index(); 
                        obj.placeholder.text(obj.val);
                        obj.icon.attr('style', icon2); 
                    });
                },
                getValue : function() {
                    return this.val;
                },
                getIndex : function() {
                    return this.index;
                }
            }
 

 $('.j-dropdown-list').each(function() {
 
                var dd = new DropDown(  $(this) );

                $(document).click(function() {
                    // all dropdowns
                    $('.wrapper-dropdown-3').removeClass('active');
                });
 });


 


       


$('.j-product-gal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 300,
    asNavFor: '.j-product-thumbs',
    pauseOnHover: false,
    mobileFirst: true,
  responsive: [{
                         breakpoint: 992,
                         settings: {
                             dots: false,
                             fade: true
                         }
                          
                     },
                     {
                         breakpoint: 400,
                         settings: {
                            
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     }
                 ]

}).on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});

$('.j-product-thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
      mobileFirst: true,
    asNavFor: '.j-product-gal',
     responsive: [{
                        breakpoint: 1200,
                        settings: {
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                          
                     },{
                        breakpoint: 992,
                        settings: {
                        dots: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                          
                     }
                 ]
});
 

$('.j-slick').slick();



 $('.j-features tr').slice(5).addClass('hidden');

 $('.j-toggle-features').on('click', function(e) {
     e.preventDefault();

     if (!$(this).hasClass('active')) {
         $('.j-features tr').removeClass('hidden');
         $(this).addClass('active').text('Скрыть');

     } else {
         $('.j-features tr').slice(5).addClass('hidden');
         $(this).removeClass('active').text('Показать еще');
     }
 });


 var img = document.getElementsByTagName('img');

for(var i in img)
{
    img[i].oncontextmenu = function()
    {
        return false;
    }
}