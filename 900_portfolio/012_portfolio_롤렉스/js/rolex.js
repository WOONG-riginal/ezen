/* 비디오 재생 스크립트 */
const video = document.getElementById('mont_video');
const videoBtn = document.getElementById('mont_btn');
videoBtn.addEventListener('click', function(){
    if(video.paused){
        video.play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        video.pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});


/* LNB 메뉴 오픈 스크립트 */
const hamBtn = document.querySelector('.menu_btn');
const hams = document.querySelector('.ham');
const hamTxt = document.querySelectorAll('.ham_txt');
const gnbMenu = document.querySelector('.gnb');
const lnbMenu = document.querySelector('.lnb_wrapper');
hamBtn.addEventListener('click', function(){
    hams.classList.toggle('X-btn');
    for(var i=0; i<hamTxt.length; i++){
        hamTxt[i].classList.toggle('show');}
    gnbMenu.classList.toggle('gnbhide');
    lnbMenu.classList.toggle('active');
});


/* LNB 서브메뉴 스크립트 */
const lnbList = document.querySelectorAll('.lnb li');
const sub_menuList = document.querySelectorAll('.sub_menu');
for(var i=0; i<lnbList.length; i++){
    lnbList[i].addEventListener('click', function(){
        for(var j=0; j<lnbList.length; j++){
            lnbList[j].classList.remove('on');
            sub_menuList[j].classList.remove('display');
        }
        this.classList.add('on');
        let idx=$(this).index();
        sub_menuList[idx].classList.add('display');
    })
}

/* 컬렉션 메뉴 스크립트 */
let movelength = 0;
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
downBtn.addEventListener('click', function(){
    movelength += 300;
    if(movelength>=900) {
        movelength=900;
        $('.down-btn').fadeOut();
    }
    $('.up-btn').fadeIn();
    $('.collection .sub_box').css({transform:'translateY(-'+movelength+'px)'});
});
upBtn.addEventListener('click', function(){
    movelength -= 300;
    if(movelength<=0) {
        movelength=0;
        $('.up-btn').fadeOut();
    }
    $('.down-btn').fadeIn();
    $('.collection .sub_box').css({transform:'translateY(-'+movelength+'px)'});
});