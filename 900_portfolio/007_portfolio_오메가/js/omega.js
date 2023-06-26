/* 로딩화면 스크립트 */
window.onload=function(){
    var screenwidth=window.innerWidth;
    if(screenwidth>768){
        $('.container').hide();
        beBright();
        setTimeout(beDark, 4500);
        setTimeout(loaded, 5500);
        setTimeout(startPage, 5500);
        setTimeout(beBright, 6000);
    
        setTimeout(addLine1, 1200);
        setTimeout(removeLine1, 2200);
        setTimeout(addLine2, 2400);
        setTimeout(removeLine2, 3400);
        setTimeout(addLine3, 3600);
        setTimeout(removeLine3, 4600);
    }else{
        beBright();
        loaded();
    }
}

function beBright() { $('.curtain').fadeOut(1000); }
function beDark() { $('.curtain').fadeIn(1000); }
function addLine1() { $('.line p').eq(0).show(); }
function addLine2() { $('.line p').eq(1).show(); }
function addLine3() { $('.line p').eq(2).show(); }
function removeLine1() { $('.line p').eq(0).hide(); }
function removeLine2() { $('.line p').eq(1).hide(); }
function removeLine3() { $('.line p').eq(2).hide(); }
function loaded() { $('.loading').hide(); }
function startPage() { $('.container').show(); }


/* 경고창 스크립트 */
$('.lm li:nth-child(3),.lm li:nth-child(5),.rm li,.ham_menu-2f li,.no-action li,.detail,.buynow,.fnb li span,.fnb-sub li,.sns ul li,.legal-menu li').click(function(e){
    e.preventDefault();
    $('.alert-message').fadeIn();
    $('.alert-curtain').fadeIn();
    setTimeout(function(){
        $('.alert-message').fadeOut();
        $('.alert-curtain').fadeOut();
    },1000)
});


/* TOP 버튼 스크립트 */
$(window).on('scroll',function(){
    var scrT=$(this).scrollTop();
    var screenwidth=window.innerWidth;
    if(screenwidth>768){
        if(scrT>=500){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
    }
});
$('.top-btn').click(function(){
    window.scrollTo({top: 0, behavior: 'smooth'}); 
});


/* HAM 메뉴 스크립트 */
$('.ham-btn').click(function(e){
    e.preventDefault();
    $('.ham_menu').toggleClass('comeon');
    $('.ham-btn p').toggleClass('no-show');
    $('.ham_menu').toggleClass('cuntain-on');
    $('.ham').toggleClass('X-btn');

    if($('.ham_menu').hasClass('cuntain-on')){
        $('.ham_curtain').show();
        $('body').css({overflow:'hidden'});
        $('.top-btn').css({opacity:0});
    }else{
        $('.ham_curtain').hide();
        $('body').css({overflow:'visible'})
        $('.top-btn').css({opacity:1});
    }
})

$('.on-off .active').next('.ham_menu-2f').show();
$('.on-off>li').click(function(){
    if($(this).hasClass('active')){
        $('.on-off>li').removeClass('active');
    }else{
        $('.on-off>li').removeClass('active');
        $(this).addClass('active');
    }
    $('.on-off .ham_menu-2f').slideUp();
    $('.on-off .active').next('.ham_menu-2f').slideDown();
})