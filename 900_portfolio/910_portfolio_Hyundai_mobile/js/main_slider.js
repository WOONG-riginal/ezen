// 자동 슬라이드
var slideIndex=0;
function autoSlide(){
    var i;
    var atSlide = $('.slide_section');
    var atSlideDot = $('.dot_list li');
    
    for(i=0;i<atSlide.length;i++){
        atSlide.eq(i).css({left:'100vw'});
    }

    if($('.control_button').hasClass('slide_active')){
        slideIndex++;
        atSlide.eq(slideIndex-6).stop().css({display:'block'});
        atSlide.eq(slideIndex-6).stop().animate({left: 0});
        atSlide.eq(slideIndex-6).find('.slide_image').stop().css({left:'100vw'});
        atSlide.eq(slideIndex-6).find('.slide_image').stop().animate({left:'5vw'},1000);
    }else{
        slideIndex=slideIndex;
        for(i=0;i<atSlide.length;i++){
            atSlide.eq(i).css({left:'100vw'});
        }
        atSlide.eq(slideIndex-1).stop().css({left: 0});
    }
    
    if(slideIndex>atSlide.length){
        slideIndex=1;
    }

    atSlideDot.eq(slideIndex-1).find('.dot').css({backgroundColor:'#007fa8'});
    atSlideDot.eq(slideIndex-2).find('.dot').css({backgroundColor:'rgba(0,0,0,0.1)'});

    if(slideIndex==atSlide.length){
        $('.slide_container .item_button_box').css({background:'rgba(246,243,242,0.5)'})
    }else{
        $('.slide_container .item_button_box').css({background:'#f7f3f2'})
    }

    setTimeout(autoSlide,3000);
}
// 슬라이드 버튼 스크립트
function slideBtn(){
    $('.control_button').click(function(){
        if($(this).hasClass('slide_active')){
            $(this).removeClass('slide_active');
            $(this).html('▶');
            $(this).css({fontSize:'10px'});
            $(this).css({paddingTop:3});
            $(this).css({paddingLeft:2});
        }else{
            $(this).addClass('slide_active');
            $(this).html('ll');
            $(this).css({fontSize:'11px'});
            $(this).css({paddingTop:3});
            $(this).css({paddingLeft:0});
        }
    });
}
// pager 클릭 스크립트
function pagerClick(){
    $('.dot').click(function(){
        slideIndex=($(this).parent().index())+1;

        var pagerSlide = $('.slide_section');
        var pagerSlideDot = $('.dot_list li');
    
        for(i=0;i<pagerSlide.length;i++){
            pagerSlide.eq(i).css({display:'none'});
            pagerSlide.eq(i).css({left:'100vw'});
            pagerSlideDot.eq(i).find('.dot').css({backgroundColor:'rgba(0,0,0,0.1)'});
        }
    
        pagerSlide.eq(slideIndex-1).stop().css({display:'block'});
        pagerSlide.eq(slideIndex-1).stop().animate({left:0});
        pagerSlide.eq(slideIndex-1).find('.slide_image').stop().css({left:'100vw'});
        pagerSlide.eq(slideIndex-1).find('.slide_image').stop().delay(200).animate({left:0},1000);
    
        pagerSlideDot.eq(slideIndex-1).find('.dot').css({backgroundColor:'#007fa8'});
    
        if(slideIndex==pagerSlide.length) {
            $('.slide_container .item_button_box').css({background:'rgba(246,243,242,0.5)'})
        }else{
            $('.slide_container .item_button_box').css({background:'none'})
        }

        $('.control_button').removeClass('slide_active');
        $('.control_button').html('▶');
        $('.control_button').css({fontSize:'10px'});
        $('.control_button').css({paddingTop:3});
        $('.control_button').css({paddingLeft:2});
    });
}