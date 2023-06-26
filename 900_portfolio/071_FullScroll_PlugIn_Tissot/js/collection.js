/* 카테고리 스크립트 */
$('.category p').click(function(){
    $('.category p').removeClass('active');
    $(this).addClass('active');
})
$('.category p:nth-child(1)').click(function(){
    $('.watch_list li').show();
})
$('.category p:nth-child(2)').click(function(){
    $('.watch_list li').hide();
    $('.touch').show();
})
$('.category p:nth-child(3)').click(function(){
    $('.watch_list li').hide();
    $('.classic').show();
})
$('.category p:nth-child(4)').click(function(){
    $('.watch_list li').hide();
    $('.sport').show();
})
$('.category p:nth-child(5)').click(function(){
    $('.watch_list li').hide();
    $('.heritage').show();
})
$('.category p:nth-child(6)').click(function(){
    $('.watch_list li').hide();
    $('.pocket').show();
})
$('.category p:nth-child(7)').click(function(){
    $('.watch_list li').hide();
    $('.gold').show();
})


/* 경고창 스크립트*/
$('.gnb li:first-child, .gnb li:nth-child(2)~li, .lnb li, .watch_list li, .footer_title li, .fnb a').click(function(e){
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