/* 푸터 2depth 스크립트 */
const plusBtn = document.querySelectorAll('.footer_title');

for(let i=0; i<plusBtn.length; i++){
    plusBtn[i].addEventListener('click', toggleFooterMenu);
}
const CLICKED_CLASS='clicked';
const MARKED_CLASS='mark';

function toggleFooterMenu(){
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}