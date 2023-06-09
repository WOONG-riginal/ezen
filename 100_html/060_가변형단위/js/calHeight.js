$(function(){
    // 브라우저 너비 높이값 변수 할당    
    var nowWidth=$(window).width();
    var nowHeight=$(window).height();
    console.log(nowWidth,nowHeight);
    // DOM객체에 동적 높이값 적용
    $('body').css({height:nowHeight})
});