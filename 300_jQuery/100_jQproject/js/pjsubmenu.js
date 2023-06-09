$('.gnb li').mouseenter(function(){
    $(this).find('.submenu').stop().slideDown();
    // $(this).children('div').stop().slideDown();
});
$('.gnb li').mouseleave(function(){
    $(this).find('.submenu').stop().slideUp();
    // $(this).children('div:visible').stop().slideUp();
});