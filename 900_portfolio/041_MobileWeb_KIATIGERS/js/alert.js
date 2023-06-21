/* 준비창 스크립트 */
$('.sns li,.member,.menuBtns li:nth-child(2),.menuBtns li:nth-child(3),.menuBtns li:nth-child(5),.menuBtns li:nth-child(7),.menuBtns li:nth-child(8),.reserve button,.policy li').click(function(){
    $('.alert').fadeIn();
    setTimeout(function(){
        $('.alert').fadeOut();
    },1000)
});