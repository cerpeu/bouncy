;(function ($) {
    "use strict";

    const bestSlider = $('.ba-team-slider');

    bestSlider.slick({
        infinite: false,
        adaptiveHeight: true,
        fade: false,
        prevArrow: '.ba-best-slider-prev',
        nextArrow: '.ba-best-slider-next',
        dots: true
    });

    // --------


    const bestSlide = $('.slider-2');

    bestSlide.slick({
        infinite: false,
        adaptiveHeight: true,
        fade: false,
        prevArrow: '.ba-best-slider-prev',
        nextArrow: '.ba-best-slider-next',
        dots: true
    });

})(jQuery);

