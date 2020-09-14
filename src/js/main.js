             const players = Plyr.setup('.js-player');
             const $menu = $('.j-mm-navi');
             const $isnavi = $('body');
             const $mnavitoggle = $('.j-mobile-toggle');

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

             $('.j-scrollto').click(function() {

                 var scrollTo = $(this).position().left;
                 $(this).parent().scrollLeft(scrollTo);

                 console.log(scrollTo);


                 $('.j-scrollto').removeClass('active');
                 $(this).toggleClass('active');


                 $page.animate({
                     scrollTop: $($.attr(this, 'href')).offset().top - 60
                 }, 1000);
                 return false;
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


             $('.hc-menu > li').mouseenter(function() {
                 $('.hc-menu li').removeClass('active');
                     $(this).addClass('active');
                 })
                 .mouseleave(function() {
                  //  $('.hc-menu li').removeClass('active');
                 });


             function appendNavi() {

                 var w = $(window).width();

                 if (w >= 975) {
                     $('.j-kb-navi-desktop').append($('#kb-navi'));

                     $('.mobile-accordion').removeClass('accordion');

                     $isnavi.removeClass('is-mnavi');
                     $mnavitoggle.children().removeClass('active');

                 } else {

                     $('.knowlege-slider-container').prepend($('#kb-navi'));
                     $('.mobile-accordion').addClass('accordion');
                     $('.mobile-accordion:eq(0)').addClass('active');
                 }
             }


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

             // end reviews slider


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

             // end reviews slider


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



             // micromodal init function
             MicroModal.init();



             $('body').on('click', '.j-dropdown-open', function(e) {
                 e.preventDefault();

                 $(this).toggleClass('active');

                 var popup = $(this).data('toggle');
                 if (!$(popup).hasClass('active')) {
                     $('.j-dropdown').removeClass('active');
                     $('[data-id="' + popup + '"]').addClass('active');
                 } else {
                     $('[data-id="' + popup + '"]').removeClass('active');
                 }
             });

             $(document).mouseup(function(e) {
                 var popup = $('.j-dropdown');

                 if (!popup.is(e.target) && popup.has(e.target).length === 0) {
                     popup.removeClass('active');
                     popup.children().removeClass('active');


                 }
             });







             // contacts slider 
             $(document).on('click', '.j-stuff-toggle', function() {
                 var sldr = $(this).data('target');
             });


             var sticky = new Sticky('.j-sticky');
             var myStuffSwiper = undefined;

             function initStuffSwiper() {
                 var screenWidth = $(window).innerWidth();
                 var sld = document.querySelector('.j-stuff-slider');

                 if (screenWidth < 992 && myStuffSwiper == undefined) {

                     myStuffSwiper = new Swiper(sld, {
                         loop: true,
                         centeredSlides: true,
                         slidesPerView: 'auto',
                         spaceBetween: 0,
                         adaptiveHeight: true,
                     });
                 } else if (screenWidth > 991 && myStuffSwiper != undefined) {

                     myStuffSwiper.destroy(true, true);
                     myStuffSwiper = undefined;
                     $('.j-stuff-slider').find('.swiper-wrapper').removeAttribute('style');
                     $('.j-stuff-slider').find('.swiper-slide').removeAttribute('style');
                 }
             }

             //Swiper plugin initialization
             initStuffSwiper();
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


             //   var myTeamSwiper = undefined;

             // function initTeamSwiper() {
             //     var screenWidth = $(window).innerWidth();
             //     var slider = document.querySelector('.j-team-slider');

             //     if (screenWidth < 992 && myTeamSwiper == undefined) {

             //         myTeamSwiper = new Swiper(slider, {
             //             loop: true, 
             //             spaceBetween: 0,
             //             slidesPerView: 1,
             //             adaptiveHeight: true,
             //             pagination: {
             //                el: '.team-pagination',
             //                clickable: true,
             //             },

             //              breakpoints: {
             //         400: {
             //             slidesPerView: 2, 
             //         }
             //     },
             //         });
             //     } else if (screenWidth > 991 && myTeamSwiper != undefined) {

             //         myTeamSwiper.destroy(true, true);
             //         myTeamSwiper = undefined;
             //         $('.j-team-slider .swiper-wrapper').removeAttribute('style');
             //        $('.j-team-slider .swiper-slide').removeAttribute('style');
             //     }
             // }

             //Swiper plugin initialization
             //   initStuffSwiper();
             //   initTeamSwiper();
             usbtnssize();



             function usbtnssize() {

                 var buttonH = $('.us-btns').height() / 2;
                 $('.us-btns').width(buttonH);

             }

             $(window).resize(function() {

                 appendNavi();
                 usbtnssize()

                 //  initPremsSwiper();
                 //  initStuffSwiper(); 
                 //  initTeamSwiper();
             });



             /// swiper 

             (function() {

                 'use strict';

                 const breakpoint = window.matchMedia('(min-width:992px)');

                 // keep track of swiper instances to destroy later
                 let mySwiper;
                 let myPremsSwiper;
                 let myReturnSwiper;

                 const breakpointChecker = function() {

                     // if larger viewport and multi-row layout needed
                     if (breakpoint.matches === true) {

                         if ($('.j-team-slider').length) {
                             if (mySwiper !== undefined) mySwiper.destroy(true, true);
                         }
                         // clean up old instances and inline styles when available
                         if ($('.j-pp-slider').length) {
                             if (myPremsSwiper !== undefined) myPremsSwiper.detachEvents();
                             myPremsSwiper = undefined;
                         }

                         if ($('.j-return-slider').length) {

                             if (myReturnSwiper !== undefined) myReturnSwiper.destroy(true, true);
                         }

                         return;

                         // or/and do nothing
                         // else if a small viewport and single column layout needed
                     } else if (breakpoint.matches === false) {
                         // fire small viewport version of swiper
                         enableSwiper();
                         enablePremsSwiper();
                         enableReturnSwiper();

                     }

                 }



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
                 }


                 var enablePremsSwiper = function() {
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
                 }


                 const enableReturnSwiper = function() {



                     $('.return-slider').each(function() {
                         var myReturnSwiper = new Swiper('.return-slider', {
                             loop: true,
                             mode: 'horizontal',
                             slidesPerView: 2,
                             spaceBetween: 0,

                             pagination: {
                                 el: '.return-navi .swiper-progressbar',
                                 type: 'progressbar',
                             },
                             navigation: {
                                 nextEl: '.return-navi .swiper-btn-next',
                                 prevEl: '.return-navi .swiper-btn-prev',
                                 loop: true,
                             },

                             on: {
                                 init: function() {

                                     var totalslide = $('.return-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
                                     $(".return-navi .swiper-total-slides").html('0' + totalslide);

                                 },
                             },
                         });

                         myReturnSwiper.on('slideChange', function() {
                             var activeslide = myReturnSwiper.realIndex + 1;
                             $(".return-navi .swiper-active-slides").html('0' + activeslide);
                         });

                     });
                 }



                 // keep an eye on viewport size changes
                 breakpoint.addListener(breakpointChecker);

                 // kickstart
                 breakpointChecker();



             })(); /* IIFE end */