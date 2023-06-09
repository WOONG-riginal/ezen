/* 서브메뉴 */
$('.submenu').hide();
function mouseYes(num){
    showSubmenu(num);
}
function mouseNo(num){
    hideSubmenu(num);
}
function showSubmenu(num){
    $('.submenu').eq(num).stop().slideDown();
}
function hideSubmenu(num){
    $('.submenu').eq(num).stop().slideUp();
}

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