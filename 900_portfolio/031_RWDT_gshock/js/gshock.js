/* 경고창 스크립트*/
$('.gnb li:nth-child(1) a,.gnb li:nth-child(2) a,.gnb li:nth-child(3) a,.gnb li:nth-child(4) a,.search_icon,.promotion_list a,.work_list a,.blog_list a,.send_btn').click(function(e){
    e.preventDefault();
    $('.alert-message').fadeIn();
    $('.alert-curtain').fadeIn();
    setTimeout(function(){
        $('.alert-message').fadeOut();
        $('.alert-curtain').fadeOut();
    },1000)
});

/* 박스 슬라이드 설정 스크립트 */
$('.slide_gallery').bxSlider({
    auto: true,
    speed: 1000,
    mode:'horizontal',
    pager:true,
});