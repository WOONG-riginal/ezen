// 경고창 스크립트
function popAlert(){
    $('.myhyundai, .util div, .lang li, .gnb_contents li, .shop, .event_slide, .btn_img, .quick_menu li, .ioniq6 button, .ioniq6 li, .app_slide a, .app_download span, .bestseller span, .toggle_menu article li, .chatbot, .fnb li').click(function(e){
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
// 챗봇 스크립트
function chatbotPosition(){
    $(window).on('scroll',function(){
        var bodyH = $('body').height();
        var windowH = $(window).height();
        var toggleH = $('.toggle_menu>div').height();
        var chatbotPs = (bodyH-windowH-toggleH-450);
        var scrT=$(this).scrollTop();
        if(scrT>chatbotPs){
            $('.chatbot').css({position:'absolute'});
            $('.chatbot').css({bottom:-(chatbotPs)});
        }else{
            $('.chatbot').css({position:'fixed'});
            $('.chatbot').css({bottom:'30px'});
        }
    });
}

