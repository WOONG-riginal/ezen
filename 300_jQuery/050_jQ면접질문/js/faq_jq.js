$(document).ready(function(){
    /* 각 항목 열기/닫기 */
    $('.open1').click(function(){
        $(this).parent().next().stop().show();
    });
    $('.close1').click(function(){
        $(this).parent().next().stop().hide();
    });
    /* 모두열기/모두닫기 */
    $('.open').click(function(){
        $('.content').stop().show();
    });
    $('.close').click(function(){
        $('.content').stop().hide();
    });
});