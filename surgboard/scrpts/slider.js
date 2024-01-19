const slider = $(".slider").bxSlider({
    pager: false,
    controls: false
});

$('.slider-btn--left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})
$('.slider-btn--right').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})