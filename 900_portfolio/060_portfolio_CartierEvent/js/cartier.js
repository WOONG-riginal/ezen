$('.contents article').mouseenter(function(){
    $(this).find('video').get(0).play();
    $(this).stop().animate({width:'35%'},500);
})
$('.contents article').mouseleave(function(){
    $(this).find('video').get(0).pause();
    $(this).stop().animate({width:'12%'},500);
})
