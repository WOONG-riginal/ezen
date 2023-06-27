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

$('.ranking').load('./include/ranking.html',function(){
    showRanking();
});

$('.electric_car').load('./include/electric_car.html');

$('.application').load('./include/application.html',function(){
    $('a').click(function(e){
        e.preventDefault();
    })
});

$('.hyundai_shop').load('./include/hyundai_shop.html');

$('.campaign').load('./include/campaign.html',function(){
    brandSlide();
});