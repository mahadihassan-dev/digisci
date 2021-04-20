$(document).ready(function() {
    // Feature Work Slider
    $('.project-slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<i class="fas fa-chevron-left sl-nav sl-nav-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right sl-nav sl-nav-right"></i>',
        responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },

        ]
    });
    // Moblie Application Slider
    $('.app-slider').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        prevArrow: '<i class="fas fa-chevron-left sl-nav app-sl-nav-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right sl-nav app-sl-nav-right"></i>',
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },

        ]
    });
    // Client Profile Slider
    $('.client-profile-slide').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});