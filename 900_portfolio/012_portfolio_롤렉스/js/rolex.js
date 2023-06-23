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

    if($('.lnb_wrapper').hasClass('active')){
        $('.lnb_curtain').show();
        $('body').css({overflow:'hidden'})
    }else{
        $('.lnb_curtain').hide();
        $('body').css({overflow:'visible'})
    }
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


/* ABOUT US 스크립트 */
const usTitle=document.querySelectorAll('.about_us_title p');
const usDot=document.querySelectorAll('.line_dots .dot');
const usContent=document.querySelectorAll('.about_us_content p');
const usPic=document.querySelectorAll('.about_us_pic');
for(var i=0; i<usTitle.length; i++){
    usTitle[i].addEventListener('click', function(){
        for(var j=0; j<usTitle.length; j++){
            usTitle[j].classList.remove('active');
            usDot[j].classList.remove('active');
            usContent[j].classList.remove('active');
            usPic[j].classList.remove('active');
        }
        let idx=$(this).index();
        usTitle[idx].classList.add('active');
        usDot[idx].classList.add('active');
        usContent[idx].classList.add('active');
        usPic[idx].classList.add('active');
    })
}


/* initiative 스크립트 */
$('.ques').click(function(){
    if($(this).hasClass('mark')){
        $(this).removeClass('mark');
        $(this).next('.answ').slideUp();
    }else{
        $('.answ').slideUp();
        $('.QnA div').removeClass('mark');
        $(this).addClass('mark');
        $(this).siblings('.answ').slideDown();
    }
});


/* 경고창 생성 스크립트 */
const addAlert = document.createElement('div');
const addAlertImg = new Image();
const addTxt1 =  document.createElement('p');
const addTxt2 =  document.createElement('p');
addAlertImg.src = 'images/crown.png';
const addContent1 = document.createTextNode('죄송합니다.');
const addContent2 = document.createTextNode('해당 페이지는 준비중입니다.');

addTxt1.appendChild(addContent1);
addTxt2.appendChild(addContent2);

addAlert.classList.add('alert');
addAlert.appendChild(addAlertImg);
addAlert.appendChild(addTxt1);
addAlert.appendChild(addTxt2);

document.body.appendChild(addAlert);


/* 커튼 생성 스크립트 */
const addCurtian = document.createElement('div');
addCurtian.classList.add('curtain');
document.body.appendChild(addCurtian);


/* 준비창 스크립트 */
$('.gnb a, .sub_box, .card_text button, .card_box_info p, .about_us_detail, .planet_r button, footer dd').click(function(e){
    e.preventDefault();
    $('.alert').fadeIn();
    $('.curtain').fadeIn();
    setTimeout(function(){
        $('.alert').fadeOut();
        $('.curtain').fadeOut();
    },1000)
});