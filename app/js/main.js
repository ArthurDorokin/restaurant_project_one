// open menu

$(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
});

// open menu


// carousel main
if ($('.init_slider_main img').length > 1) {

    $('.init_slider_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: false,
        fade: true,
        prevArrow: '<button class="left_arrow arrow" type="button"><img src="img/Arrow-left.png"></button>',
        nextArrow: '<button class="right_arrow arrow" type="button"><img src="img/Arrow-right.png"></button>'
    });
}
// carousel main

// carousel menu
// if ($('.slide_menu_item div').length > 1) {

    $('.slide_menu_item').slick({
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplaySpeed: 3000,
        // autoplay: false,
        // fade: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="left_arrow_menu arrow_menu" type="button"><img src="img/Arrow-left.png"></button>',
        nextArrow: '<button class="right_arrow_menu arrow_menu" type="button"><img src="img/Arrow-right.png"></button>'
    });
// }
// carousel menu