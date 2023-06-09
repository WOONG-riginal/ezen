/* [중요]이벤트 호출시 인라인이벤트에서 넘겨주는 인자값을 인지 */
// 슬라이드 인덱스 초기 변수값 설정 = 1
var slideIndex=1;
// 실제 수동 슬라이드 동작 함수 호출
// 초기값 1로 시작
showSlide(slideIndex);

/* 슬라이드 좌우이미지 클릭시 이벤트 리스너 | 매개변수 1, -1*/
function plusSlides(num){
    showSlide(slideIndex+=num);
}

/* DotDotDot 클릭시 이벤트 리스너 | 매개변수 1, 2, 3 */
function currentSlides(num){
    showSlide(slideIndex=num);
}

/* 실제 수동 슬라이드 동작 함수 */
function showSlide(num){
    var i;
    var slide=$('.slide img');
    var dot=$('.dot');
    console.log('슬라이드 개수 : '+slide.length);
    
    /* 1. 좌우 화살표 클릭시 수동 슬라이드 제약사항 체크 */
    // 1-1. 매개변수 값이 슬라이드 박스 개수(여기서는 3)보다 크면 slideIndex변수값을 초기값 1로 세팅
    if(num>slide.length){
        slideIndex=1;
    }
    // 1-2. 매개변수 값이 0이하이면 slideIndex변수값을 슬라이드 박스 개수로 세팅
    if(num<1){
        slideIndex=slide.length;
    }
    
    /* 2. 수동 슬라이드 구현 */
    // 2-1. 모든 슬라이드 이미지 박스 숨기기
    for(i=0;i<slide.length;i++){
        // $('.slide').eq(i).hide();
        // $('.slide').eq(i).css({display:'none'});
    }
    // 2-2. 로딩시 첫번째 슬라이드 이미지 나오도록 코딩
    // 이벤트 발생시 다음,이전 이미지 구현됨
    $('.slide').eq(slideIndex-1).show();
    $('.slide img').eq(slideIndex-1).css({left:0});
    $('.slide img').eq(slideIndex-2).css({left:1280});
    $('.slide img').eq(slideIndex-3).css({left:1280});


    /* 3. Dot 컬러바꾸기 구현 */
    $('.dot').eq(slideIndex-1).css({backgroundColor:'#2497b2'});
    $('.dot').eq(slideIndex-2).css({backgroundColor:'#ccc'});
    $('.dot').eq(slideIndex-3).css({backgroundColor:'#ccc'});
}