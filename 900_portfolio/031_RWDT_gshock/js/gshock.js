/* a링크 방지 스크립트*/
$('a, button').click(function(e){
    e.preventDefault();
});

/* 박스 슬라이드 설정 스크립트 */
$('.slide_gallery').bxSlider({
    auto: true,
    speed: 500,
    mode:'horizontal',
    pager:true,
});