/* 날짜 기입 스크립트 */
nowday = new Date();
year = nowday.getFullYear();
month = nowday.getMonth() + 1;
date = nowday.getDate();

whatday = nowday.getDay();
function whatDay(whatday){
    if(whatday===1){day="월";}
    else if(whatday===2){day="화";}
    else if(whatday===3){day="수";}
    else if(whatday===4){day="목";}
    else if(whatday===5){day="금";}
    else if(whatday===6){day="토";}
    else{day="일";}

    return day;
}

document.getElementById("today_match").innerHTML = year+"."+month+"."+date+"("+whatDay(whatday)+")";
if(whatday===2){
    document.getElementById("prev_match").innerHTML = year+"."+month+"."+(date-2)+"("+whatDay(whatday-2)+")";
}else{
    document.getElementById("prev_match").innerHTML = year+"."+month+"."+(date-1)+"("+whatDay(whatday-1)+")";
}
document.getElementById("next_match").innerHTML = year+"."+month+"."+(date+1)+"("+whatDay(whatday+1)+")";


/* 박스 슬라이더 스크립트 */
$(function(){
    $('.slide').bxSlider({
        auto: true,
        speed: 500,
        pause: 3000,
        mode:'horizontal',
        autoControls: false,
        pager:false,
    });
});


