/* 풀 페이지 스크롤 스크립트 */
new fullScroll({
    mainElement: 'wrap',
    displayDots: true,
    dotsPosition: 'right',
    animateTime: 0.7,
    animateFuction: 'ease'
});


/* 비디오 컨트롤 스크립트 */
$('.videoBtn button').click(function(){
    $('button').toggleClass('on');
    if($('.vid video').get(0).paused){
        $('.vid video').get(0).play();
    }else{
        $('.vid video').get(0).pause();
    }
});


/* 경고창 스크립트*/
$('.gnb li:first-child, .gnb li:nth-child(2)~li, article button, .watch_list li, .womens button, .section3 li, .news li, .news_btn, .service button, .footer_title li, .fnb a').click(function(e){
    e.preventDefault();
    $('.alert-message').fadeIn();
    $('.alert-curtain').fadeIn();
    setTimeout(function(){
        $('.alert-message').fadeOut();
        $('.alert-curtain').fadeOut();
    },1000)
});


/* 매장찾기 스크립트 */
function findStore(){
    window.open('about:blank').location.href='findStore.html'
};