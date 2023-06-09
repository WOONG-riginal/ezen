$('.tab_btn li').click(function(){
    // 각각의 탭 index값 리턴 메서드
    // 이벤트 탭을 클릭했을 때 index 번호를 콘솔창에 출력
    const idx=$(this).index();
    console.log(idx);
    // 탭 영역에 각각 on클래스 적용
    $('.tab_btn li').removeClass("on");
    $(this).addClass("on");
    
    // 해당탭 내용만 보이도록 코딩
    $('.list').hide();
    $('.list').eq(idx).show();
});

// 해당 질문과 답 | 화살표 방향 스크립트
$('.question').click(function(){
    // 빈 hasClss()
    if($(this).hasClass('active')){ //active클래스가 있으면 실행
        $(this).removeClass('active');
        // 화살표 방향 바꾸기
        $(this).children('dd').removeClass('up');
        $(this).children('dd').addClass('down');
        // 해당 내용 가리기
        $(this).next().slideUp();
    }else{ //active클래스가 없으면 실행
        $(this).addClass('active');
        // 화살표 방향 바꾸기
        $(this).children('dd').removeClass('down');
        $(this).children('dd').addClass('up');
        // 해당 내용 보여주기
        $(this).siblings('.answer').slideDown();
    }
});