/* 서브메뉴 */
$('.submenu').hide()
$('.gnb li').mouseenter(function(){
    $('.submenu').hide()
    const idx = $(this).index();
    $('.submenu').eq(idx).show();
});
$('header').mouseleave(function(){
    $('.submenu').hide()
})

/* 스크롤, TOP버튼 */
$(window).on('scroll',function(){
    var scrT=$(this).scrollTop();
    if(scrT>=100){
        $('aside div').fadeIn();
    }else{
        $('aside div').fadeOut();
    }
});
$('.topBtn').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},500);
});

/* 맨 첫 줄 */
$('.x_box2').click(function(){
    $('.first_line').slideUp();
});

/* 슬라이드 이미지 */
$(function(){
    $('.slide_gallery').bxSlider({
        auto: true,
		speed: 1000,
		pause: 4000,
		mode:'horizontal',
		autoControls: false,
		pager:true,
    });
});