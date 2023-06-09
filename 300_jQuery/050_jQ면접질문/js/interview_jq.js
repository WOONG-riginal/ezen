$(document).ready(function(){
    /* 각 항목 열기/닫기 */
    $('.open').click(function(){
        $(this).parent().next().stop().slideDown();
    });
    $('.close').click(function(){
        $(this).parent().next().stop().slideUp();
    });
    /* 모두열기/모두닫기 */
    $('.openAll').click(function(){
        $('article p').stop().slideDown();
    });
    $('.closeAll').click(function(){
        $('article p').stop().slideUp();
    });
});