$(function() {



    const players = Plyr.setup('.js-player');


    const $menu = $('.j-mm-navi');
    const $isnavi = $('body');
    const $mnavitoggle = $('.j-mobile-toggle');

    $(document).mouseup(e => {
        if (!$menu.is(e.target) // if the target of the click isn't the container...
            &&
            $menu.has(e.target).length === 0  // ... nor a descendant of the container
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


    $(document).on("click",".accordion .accordion_tab", function() {

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

 

 (function($) {
  $(function() {
    $(".j-tabs-container").on("click", ".j-mt-btn:not(.active)", function() {
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
  });
})(jQuery);


// function showTabs() {

 
//   $('[data-target="tab-1"]').addClass('active');
//   $('[data-item="tab-1"]').addClass('active');

//   // let tabs = document.querySelector('.j-tabs-container');

//    $(document).on('click', '.j-mt-btn',  function() {
//        var tab = $(this).data('target');
  
           
//            $('.j-tabs .tab').removeClass('active');
//             $('.j-mt-btn').removeClass('active');
               
     
//             $('[data-target="'+tab+'"]').toggleClass('active');
//              $('[data-item="'+tab+'"]').toggleClass('active');
//   });

// }

// showTabs();


    appendNavi();

    $(window).resize(function() {

        appendNavi();

    });


    var myMsSwiper = new Swiper('.ms-inner', {
        loop: true,
        pagination: {
            el: '.ms-navi-custom .swiper-progressbar',
            type: 'progressbar',
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
            }
        },
        on: {
            init: function() { 

                var totalslide = $('.ms-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
                $(".ms-navi .swiper-total-slides").html('0' + totalslide);

                var slidewidth = $('.ms-slider .swiper-slide').width();
                $('.ms .swiper-navi-compact').css({'left': slidewidth});

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



  
    var myPremsSwiper = undefined;

    function initPremsSwiper() {
        var screenWidth = $(window).width();

        if (screenWidth < 992 && myPremsSwiper == undefined) {

          $('.j-pp-slider').each(function() { 

            myPremsSwiper = new Swiper( this, {
                loop: true,
                autoHeight: true,

                pagination: {
                    el: this.querySelector('.swiper-pagination'),
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

        } else if (screenWidth > 991 && myPremsSwiper != undefined) {

            $('.j-pp-slider').each(function() {

            myPremsSwiper.destroy();
            myPremsSwiper = undefined;

            this.querySelector('.swiper-wrapper').removeAttr('style');
            this.querySelector('.swiper-slide').removeAttr('style');

             });
        }
    }

    //Swiper plugin initialization
    initPremsSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initPremsSwiper();
    });


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



    // header fixedtop
    $(document).on("scroll", function() {
        var scroll = $(window).scrollTop();
        // var height = $(window).height();

        if ($(this).scrollTop() >= 71) {
            $('.header').addClass('fixedTop');
        } else {
            $('.header').removeClass('fixedTop');
        }
    });



// contacts slider 
 

$(document).on('click', '.j-stuff-toggle', function() {
   
   var sldr = $(this).data('target');
 
      


});


var sticky = new Sticky('.j-sticky');

 var myStuffSwiper = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();

        // const contslider = document.querySelector(sldr);

         var sld = document.querySelector('.j-stuff-slider');

        if (screenWidth < 992 && myStuffSwiper == undefined) {

            myStuffSwiper = new Swiper( sld, {
                loop: true, 
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 0, 
                adaptiveHeight: true,

               
            });
        } else if (screenWidth > 991 && myStuffSwiper != undefined) {

            console.log('> 992px');

            myStuffSwiper.destroy();
            myStuffSwiper = undefined;
            jQuery('.j-stuff-slider .swiper-wrapper').removeAttr('style');
            jQuery('.j-stuff-slider .swiper-slide').removeAttr('style');
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function() {
        initSwiper();
    });

});

 
