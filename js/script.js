$('.slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 851,
        settings: {
            dots: false
        }
    }]
});

$('.review-carousel').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: $('#nextArrow'),
    prevArrow: $('#prevArrow'),
    asNavFor: '.review__leftBtn, .review__rightBtn',
    arrows: false
});

$('.review__rightBtn').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '.review-carousel, .review__leftBtn',
    fade: true,
    arrows: false
});

$('.review__leftBtn').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '.review-carousel, .review__rightBtn',
    fade: true,
    arrows: false
});


$('#prevArrow').click(function () {
    $(this).prev().slick('slickPrev');
});
$('#nextArrow').click(function () {
    $(this).prev().slick('slickNext');
});