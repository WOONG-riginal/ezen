/* Video 버튼 작동시키기 */
$('.playBtn').click(function(){
    if($('.vid video').get(0).paused){
        $('.vid video').get(0).play();
        $('.playBtn').html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        $('.vid video').get(0).pause();
        $('.playBtn').html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

$('.soundBtn').click(function(){
    if($('.vid video').prop('muted')){
        $('.vid video').prop('muted',false);
        $('.soundBtn').html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
    }else{
        $('.vid video').prop('muted',true);
        $('.soundBtn').html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
    }
});



/* 경고창 스크립트*/
$('#gnb li, #sns li, .inner p').click(function(e){
    e.preventDefault();
    $('.alert-message').fadeIn();
    $('.alert-curtain').fadeIn();
    setTimeout(function(){
        $('.alert-message').fadeOut();
        $('.alert-curtain').fadeOut();
    },1000)
});