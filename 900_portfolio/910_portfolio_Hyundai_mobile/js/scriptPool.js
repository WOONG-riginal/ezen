// 경고창 스크립트
function popAlert(){
    $('.myhyundai, .search, .util div, .lang li, .gnb_contents li, .shop, .event_slide, .btn_img, .quick_menu li, .ioniq6 button, .ioniq6 li, .app_slide a, .app_download span, .bestseller span, .toggle_menu article li, .chatbot, .fnb li').click(function(e){
        e.preventDefault();
        $('.alert-message').fadeIn();
        $('.alert-curtain').fadeIn();
        setTimeout(function(){
            $('.alert-message').fadeOut();
            $('.alert-curtain').fadeOut();
        },1000)
    });
}
// 스크롤 게이지바 스크립트
function progressBar(){
    var winScroll=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var scrolled=(winScroll/height)*100;
    document.getElementsByClassName("progress-bar")[0].style.width=scrolled+"%";
}
// 스크롤 이동 시 메뉴 스크립트
function menuByScroll(){
    $(window).on('scroll',function(){
        var scrT=$(this).scrollTop();
        if(!($('.ham').hasClass('open'))){
            if(scrT>10){
                $('.gnb').addClass('slideDown');
            }else{
                $('.gnb').removeClass('slideDown');
            }
        }
    });
}
// 햄버거 메뉴 스크립트
function ham(){
    $('.ham').click(function(){
        if($('.ham').hasClass('open')){
            $('.ham').removeClass('open');
            $('.logo').html('<img src="./images/main/gnb,ico/logo_mobile.png" alt="로고">');
            $('.search').html('<img src="./images/main/gnb,ico/m_search_default.png" alt="로고">');
            $('.gnb').removeClass('openGnb');
            $('.myhyundai').css({display:'none'});
            $('.divider').css({display:'none'});
            $('.ham div').eq(0).css({background:'#000'});
            $('.ham div').eq(0).css({top:0});
            $('.ham div').eq(0).css({transform:'rotate(0deg)'});
            $('.ham div').eq(1).css({opacity:1});
            $('.ham div').eq(2).css({background:'#000'});
            $('.ham div').eq(2).css({top:16});
            $('.ham div').eq(2).css({transform:'rotate(0deg)'});
            $('.gnb_open').hide();
        }else{
            $('.ham').addClass('open');
            $('.logo').html('<img src="./images/main/gnb,ico/logo_mobile_open.png" alt="로고">');
            $('.search').html('<img src="./images/main/gnb,ico/m_search_open.png" alt="로고">');
            $('.gnb').addClass('openGnb');
            $('.myhyundai').css({display:'block'});
            $('.divider').css({display:'block'});
            $('.ham div').eq(0).css({background:'#fff'});
            $('.ham div').eq(0).css({top:'50%'});
            $('.ham div').eq(0).css({transform:'translateY(-50%)'});
            $('.ham div').eq(0).css({transform:'rotate(45deg)'});
            $('.ham div').eq(1).css({opacity:0});
            $('.ham div').eq(2).css({background:'#fff'});
            $('.ham div').eq(2).css({top:'50%'});
            $('.ham div').eq(2).css({transform:'translateY(-50%)'});
            $('.ham div').eq(2).css({transform:'rotate(-45deg)'});
            $('.gnb_open').show();
        }
    })
};
// 오픈메뉴 브라우저 높이 적용 스크립트
function calHeight(){
    if($(window).height()>750){
        $('.gnb_open').css({height:($(window).height()-55)});
        $('.event_menu').css({height:($(window).height()-583)});
    }else{
        $('.event_menu').css({height:164});
    }
};
// 유틸 언어 메뉴 스크립트
function langMenu(){
    $('.lang').click(function(){
        $('.lang span').toggleClass('now');
        $('.lang ul').toggle();
    });
}
// GNB 오픈메뉴 스크립트
function openMenu(){
    $('.model div').hide();
    $('.gnb_contents h2').click(function(){
        if($(this).siblings('ol,ul,h3').hasClass('open')){
            $(this).siblings('ol,ul,h3').removeClass('open');
            $(this).find('.btn_open').hide();
            $(this).find('.btn_close').show();
            $(this).css({color:'#000'});
            $('.model_show').hide();
            $('.event_menu').css({height:($(window).height()-583)});
        }else{
            $('ol,ul,h3').removeClass('open');
            $(this).siblings('ol,ul,h3').addClass('open');
            $('.btn_open').hide();
            $('.btn_close').show();
            $(this).find('.btn_open').show();
            $(this).find('.btn_close').hide();
            $('.gnb_contents h2').css({color:'#000'});
            $(this).css({color:'#00aad2'});
            $(this).parent().find('.model_show').show();
            $('.event_menu').css({height:164});
        }
    });
    $('.gnb_contents nav ol').click(function(){
        if($(this).hasClass('model_open')){
            $('.gnb_contents nav ol').removeClass('model_open');
            $('.model div').removeClass('model_show');
        }else{
            $('.gnb_contents nav ol').removeClass('model_open');
            $('.model div').removeClass('model_show');
            $(this).addClass('model_open');
            $(this).next().addClass('model_show');
        }
        $('.model div').hide();
        $('.model_show').show();
    });
    $('.gnb_contents nav ul div').click(function(){
        if($(this).parent().find('span').hasClass('show')){
            $('.gnb_contents ul span').removeClass('show');
            $('.gnb_contents ul li').removeClass('show_menu');
            $(this).find('.detail').hide();
        }else{
            $('.gnb_contents ul span').removeClass('show');
            $('.gnb_contents ul li').removeClass('show_menu');
            $(this).parent().find('span').addClass('show');
            $(this).parent().find('li').addClass('show_menu');
            $(this).parent().find('.detail').show();
            $(this).parent().find('.detail').css({transform:'translateY(-60px)'});
        }
        $('.gnb_contents nav ul li').hide();
        $('.gnb_contents nav ul .show_menu').show();
    });
    $('.gnb_contents nav ul li').click(function(e){
        e.preventDefault();
    })
    
}
// 이벤트 슬라이드 스크립트
function eventSlide(){
    $('.event_dot').click(function(){
        var eventIdx=$(this).parent().index();
        var eventSlide = $('.event_slide');
        var eventSlideDot = $('.event_dot_list div');
        
        eventSlide.eq(eventIdx).stop().css({transform:'translateX(0px)'});
        eventSlide.eq(eventIdx-1).stop().css({transform:'translateX(-100vw)'});
        eventSlide.eq(eventIdx-2).stop().css({transform:'translateX(100vw)'});
        eventSlide.eq(eventIdx).css({zIndex:2});
        eventSlide.eq(eventIdx-1).css({zIndex:0});
        eventSlide.eq(eventIdx-2).css({zIndex:0});
    
        for(i=0;i<eventSlide.length;i++){
            eventSlideDot.eq(i).find('.event_dot').css({backgroundColor:'rgba(0,0,0,0.1)'});
        }
    
        eventSlideDot.eq(eventIdx).find('.event_dot').css({backgroundColor:'#007fa8'});
    });
}
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
// 모델 랭킹 스크립트
function showRanking(){
    $('.rankbox').hide();
    $('.rankbox').eq(0).show();
    $('.generation li').click(function(){
        $('.generation li').removeClass('active');
        $(this).addClass('active');
    })
    $('.dots div').click(function(){
        $('.dots div').removeClass('clicked');
        $(this).addClass('clicked');
        let idx=$(this).index();
        $('.rankbox').hide();
        $('.rankbox').eq(idx).show();
    })
}
// 브랜드 슬라이드 스크립트
function brandSlide(){
    $('.brand_dot').click(function(){
        let brandIdx=$(this).index();
        let brandSlide = $('.brand_slide ul li');
        let brandSlideDot = $('.brand_dot');
        
        console.log(brandIdx);
    
        brandSlide.eq(brandIdx).stop().css({transform:'translateX(0px)'});
        brandSlide.eq(brandIdx-1).stop().css({transform:'translateX(-100vw)'});
        brandSlide.eq(brandIdx-2).stop().css({transform:'translateX(100vw)'});
        brandSlide.eq(brandIdx).css({zIndex:2});
        brandSlide.eq(brandIdx-1).css({zIndex:0});
        brandSlide.eq(brandIdx-2).css({zIndex:0});
    
        for(i=0;i<brandSlide.length;i++){
            brandSlideDot.eq(i).css({backgroundColor:'rgba(0,0,0,0.1)'});
        }
    
        brandSlideDot.eq(brandIdx).css({backgroundColor:'#007fa8'});
    });
}
// 토글 메뉴 스크립트
function toggleMenu(){
    $('.toggle_menu h2').click(function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle();
    })
}