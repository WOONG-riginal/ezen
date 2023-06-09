$(document).ready(function(){
    /* 1. jQuery UI플러그인 : 효과 메스드들의 추가 기능 제공 플러그인 */
    /* show(effect type,시간), hide(effect type,시간), toggle(effect type,시간) => effect type 지정 */
    /* effect type = blind, bounce, clip, explode, fold, highlight, shake 등 */
    $('ul li').eq(0).click(function(){
        $('article img').stop().show('shake',1000);
    });
    $('ul li').eq(1).click(function(){
        $('article img').stop().hide('fold',1000);
    });
    $('ul li').eq(2).click(function(){
        $('article img').stop().toggle('explode',1000);
    });

    /* 2. jQuery Core에서는 속성값이 숫자형인 것만 가능
        jQuery UI 플러그인에서는 대부분의 속성 사용 가능 */
    /* 실습. 마지막 버튼 클릭시
        배경색 블랙, 글자색 실버
        버튼 클릭 후 3초 뒤에 글자색 레드, 글자두께 700이 되도록 애니메이션 코딩 */
    $('ul li').eq(-1).click(function(){
        $('footer').stop().animate({backgroundColor:'black',color:'silver'},500);
        $('footer span').stop().delay(3000).animate({color:'red',fontWeight:700},500);
    });
});