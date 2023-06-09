window.onscroll = function(){
    progressBar();
};
$('header').load('./include/header.html',function(){
    menuByScroll();
    ham();
    calHeight();
    langMenu();
    openMenu();
    eventSlide();
});

$('.main_slider').load('./include/main_slider.html',function(){
    autoSlide();
    slideBtn();
    pagerClick();
});