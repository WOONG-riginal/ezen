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
    popAlert();
});

$('.main_slider').load('./include/main_slider.html',function(){
    autoSlide();
    slideBtn();
    pagerClick();
    popAlert();
});

$('.ranking').load('./include/ranking.html',function(){
    showRanking();
});

$('.electric_car').load('./include/electric_car.html',function(){
    popAlert();
});

$('.application').load('./include/application.html',function(){
    popAlert();
});

$('.hyundai_shop').load('./include/hyundai_shop.html',function(){
    popAlert();
});

$('.campaign').load('./include/campaign.html',function(){
    brandSlide();
});

$('.toggle_menu').load('./include/toggle_menu.html',function(){
    toggleMenu();
    popAlert();
});

$('aside').load('./include/aside.html',function(){
    chatbotPosition();
    popAlert();
});

$('footer').load('./include/footer.html',function(){
    popAlert();
});