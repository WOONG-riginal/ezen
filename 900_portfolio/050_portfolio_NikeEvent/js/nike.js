/* Video 제어버튼 CSS */
$('figure').find('button').css({
    position:'absolute',
    right:400,
    top:50,
    cursor:'pointer',
    background:'none',
    outline:'none'
});
$('figure').find('i').css({
    fontSize:30,
    color:'#fff'
});
$('figure').find('button').eq(0).css({right:540});
$('figure').find('button').eq(1).css({right:470});

/* Video 버튼 작동시키기 */
$('figure button').eq(0).click(function(){
    $('.vid video').get(0).play();
});
$('figure button').eq(1).click(function(){
    $('.vid video').get(0).pause();
});
$('figure button').eq(2).click(function(){
    $('.vid video').get(0).load();
});