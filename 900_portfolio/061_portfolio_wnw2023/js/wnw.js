$('.contents article').mouseenter(function(){
    $('header h1').stop().animate({left:-150},1000)
    $('header p').stop().animate({left:-100},1000)
    $(this).find('video').get(0).play();
    $(this).stop().animate({width:'50%'},500);
})
$('.contents article').mouseleave(function(){
    $('header h1').stop().animate({left:100},1000)
    $('header p').stop().animate({left:150},1000)
    $(this).find('video').get(0).pause();
    $(this).stop().animate({width:'12%'},500);
})
$('.footer_menu li').eq(2).mouseenter(function(){
    $('.sns').stop().animate({bottom:40,opacity:1},500)
});
$('main').mouseenter(function(){
    $('.sns').stop().animate({bottom:0,opacity:0},500)
});