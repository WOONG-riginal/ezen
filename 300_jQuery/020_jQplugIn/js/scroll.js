$(document).ready(function(){
  /* scrollTo 플러그인 사용 */  
  $('.nav_btn').click(function(){
    // scrollTo(링크 될 #||Y축px값,애니메이션 시간)
    $(window).scrollTo(this.hash||0,500);
  });

  /* 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩 */
//   $('aside div').hide();
  $(window).on('scroll',function(){
    var scrT=$(this).scrollTop();
    if(scrT>=100){
        $('aside div').show();
    }else{
        $('aside div').hide();
    }});
  
//   var sa=100;
//   $(window).scroll(function(){
//     var num=$(window).scrollTop();
//     if(num>sa){
//         $('aside div').stop().fadeIn();
//     }else{
//         $('aside div').stop().fadeOut();
//     }
//   });


  /* animate 부드러운 스크롤탑 이동 */
  // animate()메서드, 속성 scrollTop, 이벤트
  $('.top').click(function(e){
    e.preventDefault();
    $('html,body').stop().animate({scrollTop:0},1000);
  });
})