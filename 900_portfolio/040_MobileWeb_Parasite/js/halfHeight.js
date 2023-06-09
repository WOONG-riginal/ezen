var bw=$(window).width();
var bh=$(window).height();
$('#wrap').css({height:bh});
// 브라우저 높이의 반값 구하기
var halfHeight=bh/2;
console.log(halfHeight);
// 유튜브 영상 가운데에 배치하기
$('.youtube').css({marginTop:halfHeight,transform:'translateY(-100%)'});