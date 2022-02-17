
var $ = jQuery
$(document).ready(function() {

$('.customer-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$(".prev-button").click(function() {
    $(".customer-slider").slick('slickPrev')
});
$(".next-button").click(function() {
    $(".customer-slider").slick('slickNext')
});




$('.navbar-toggler').on('click',function () {
    $('.navbar-toggler').toggleClass('closed');
});

})