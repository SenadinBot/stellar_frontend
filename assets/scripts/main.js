$(document).ready(function () {

    // Adding Class on Scroll
    $(window).on('load', function () {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 55) {
            $('body').addClass('nav-fixed');
        }
    });
    $(window).scroll(function () {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 55) {
            $('body').addClass('nav-fixed');
        } else {
            $('body').removeClass('nav-fixed');
        }
    });

    // Cases animation
    AOS.init({
        duration: 700
    });

    // Hover
    // $(".sub-menu > a").hover( function (e) {
    //     $('body').toggleClass('hover');
    // });

    // Open/Close Mobile Menu
    $('.nav-icon').on('click', function () {
        $('body').toggleClass('menu-open');
        $('.menu-item-side').removeClass('second-level');
        $('.sub-menu').removeClass('first-level');
    })

    // Open/Close Mobile Submenu 
    if ($(window).width() < 992) {
        $('.sub-menu > .mobile-arrow').on('click', function (e) {
            $(this).parents('.sub-menu').toggleClass('first-level').siblings().removeClass('first-level');
            $('.menu-item-side').removeClass('second-level');
        });
        $('.menu-item-side .mobile-arrow').on('click', function (e) {
            $(this).parents('.menu-items-content-item').siblings().children().removeClass('second-level');
            $(this).parents('.menu-item-side').toggleClass("second-level").siblings().removeClass('second-level');
        });
    }

    // Tablet Header Menu
    if ($(window).width() > 992 && $(window).width() < 1199) {
        $(document).on('touchstart click', function (e) {
            $('.sub-menu').removeClass("active-hover");
        });
        $('.sub-menu').on('touchstart click', function (e) {
            console.log('test');
            event.stopPropagation();
        })
        $('.sub-menu > a').on('touchstart click', function (e) {
            if (e.type == "touchstart") {
                if (!$(this).parent().hasClass("active-hover")) {
                    e.preventDefault();
                }
                $(this).parent().toggleClass("active-hover").siblings().removeClass('active-hover');
                if ($(".sub-menu").hasClass("active-hover")) {
                    $(this).removeClass("active-hover");
                }
                event.stopPropagation();
            } else if (e.type == "click") {
            }
        });
    };


    // Impressium Carousel
    $('.impressium-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        arrows: true
    });

    // Notification Carousel
    $('.notification-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                }
            },

        ]
    });

    /* init Jarallax */
    $(window).on('load resize orientationchange', function () {
        if ($(window).width() > 1200) {
            jarallax(document.querySelectorAll('.jarallax'));
        } else {
            jarallax(document.querySelectorAll('.jarallax'), 'destroy')
        }
    });

    // Our Clients Carousel
    $('.our-clients-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});
