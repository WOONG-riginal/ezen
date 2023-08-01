/* X버튼 스크립트 */
$('.x-btn').click(function(){
    $('.border_line').slideUp();
})


/* LNB 메뉴 스크립트 */
$('.menu').click(function(){    
    if($('#menuicon').is(':checked')){
        $('.menu_dept').slideDown();
        $('.dept_menu_curtain').show();
        $('body').css({overflow:'hidden'})
    }else{
        $('.menu_dept').slideUp();
        $('.dept_menu_curtain').hide();
        $('body').css({overflow:'visible'})
    }
})
$('.menu_content').hide();
$('.menu_content').eq(0).show();
$('.category li').click(function(){
    $('.category li').removeClass('on');
    $(this).addClass('on');
    var idx=$(this).index();
    $('.menu_content').hide();
    $('.menu_content').eq(idx).show();
})


/* 신제품 스크립트 */
$('.new-product').click(function(){
    $('html,body').stop().animate({scrollTop:2318},500);
});
$('.first_line h2').click(function(){
    $('html,body').stop().animate({scrollTop:2318},500);
});


/* 스크롤, TOP버튼 스크립트 */
$(window).on('scroll',function(){
    var scrT=$(this).scrollTop();
    console.log(scrT);
    if(scrT>=300){
        $('aside div').fadeIn();
        $('.second_line').css({height:50});
        $('.byscroll').hide();
        $(".logo a img").attr("src", "./images/scroll-logo.png");
    }else{
        $('aside div').fadeOut();
        $('.second_line').css({height:100});
        $('.byscroll').show();
        $(".logo a img").attr("src", "./images/Tudor-Logo.png");
    }
});
$('.topBtn').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},500);
});


/* 맨 첫 줄 스크립트 */
$('.x_box2').click(function(){
    $('.first_line').slideUp();
});


/* 슬라이드 스크립트 */
window.onload = function () {
    const slider = document.querySelector('.slider');
    const slideLis = slider.querySelectorAll('.slider li')

	var i=0;
	function cloning() {
	    const clone1 = slideLis[i].cloneNode(true);
	    slider.append(clone1);
    }
	function counting() {
        i++;
    }
	function cloneSliding() {
        setInterval(cloning, 3000);
        setInterval(counting, 3000);
    }
    cloneSliding();

    let currentIdx = 0;
    let translate = 0;
    const speedTime = 1000;

    const sliderCloneLis = slider.querySelectorAll('li');
    const liWidth = slideLis[0].clientWidth;
    const sliderWidth = liWidth * sliderCloneLis.length;
    slider.style.width = `${sliderWidth}px`;

    function move(D) {
        currentIdx += (-1 * D);
        translate += liWidth * D;
        translate -= 10;
        slider.style.transform = `translateX(${translate}px)`;
        slider.style.transition = `all ${speedTime}ms ease`
    }
    function sliding() {
        move(-1);
		if (currentIdx === sliderCloneLis.length)
	        setTimeout(() => {
	            slider.style.transition = 'none';
	            currentIdx = 0;
	            translate = -liWidth;
	            slider.style.transform = `translateX(${translate}px)`;
	        }, speedTime);
    }

    function showSliding() {
        setInterval(sliding, 3000);
    }
    showSliding();

}


/* 아이프레임 동영상 소스 변환 스크립트 */
$('.left_section li').click(function(e){
    e.preventDefault();
    $('.left_section li').removeClass('active');
    $(this).addClass('active');

    let url = $(this).find('a').attr('href');
    console.log(url);
    $('iframe').attr('src', url);
})


/* 경고창 스크립트 */
$('.gnb li,.snb>li:nth-child(3),.snb>li:nth-child(4),.snb>li:nth-child(5),.content_box,.first_section p,.slider li,.third_section p,.products li,.follow li,.fnb a').click(function(e){
    e.preventDefault();
    $('.alert-message').fadeIn();
    $('.alert-curtain').fadeIn();
    setTimeout(function(){
        $('.alert-message').fadeOut();
        $('.alert-curtain').fadeOut();
    },1000)
});

