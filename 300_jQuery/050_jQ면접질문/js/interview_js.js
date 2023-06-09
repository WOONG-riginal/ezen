window.onload=function(){
    /* 1-1. 개별 열기/닫기 버튼 */
    var opens=document.querySelectorAll('.open');
    console.log(opens);
    var closes=document.querySelectorAll('.close');
    console.log(closes);

    /* 1-2. 모두열기/모두닫기 버튼 */
    var open=document.querySelector('.openAll');
    console.log(open);
    var close=document.querySelector('.closeAll');
    console.log(close);
    
    /* 1-3. 각각 콘텐츠 */
    var content=document.querySelectorAll('.content');
    // var content=document.querySelectorAll('article>h2+p');
    console.log(content);


    /* 2-1. 모두 열기 구현 */
    /* 클릭했을 때 모두 열리도록 구현, 선언적 함수 스타일로 코딩 */
    open.addEventListener("click",openAll);
    function openAll(){
        for(var i=0;i<content.length;i++){
            content[i].style.display="block";
        }
    };
    
    /* 2-2. 모두 닫기 구현 */
    close.addEventListener("click",closeAll);
    function closeAll(){
        for(var j=0;j<content.length;j++){
        content[j].style.display="none";
        }
    };


    /* 3. 개별 열기/닫기 버튼 */    
    for(var i=0;i<opens.length;i++){
        opens[i].addEventListener("click",eachOpen);
        closes[i].addEventListener("click",eachClose);
    }
    
    /* 3-1. 개별 열기 구현 */
    function eachOpen(){
        this.parentElement.nextElementSibling.style.display='block';
    };

    /* 3-2. 개별 닫기 구현 */
    function eachClose(){
        this.parentElement.nextElementSibling.style.display='none';
    };
};