/* 날짜 기입 스크립트 */
nowday = new Date();
year = nowday.getFullYear();
month = nowday.getMonth() + 1;
date = nowday.getDate();

whattoday = nowday.getDay();
function whatDay(whattoday){
    if(whattoday===1){day="월";}
    else if(whattoday===2){day="화";}
    else if(whattoday===3){day="수";}
    else if(whattoday===4){day="목";}
    else if(whattoday===5){day="금";}
    else if(whattoday===6){day="토";}
    else{day="일";}

    return day;
}

if(whattoday===1){
    document.getElementById("today_match").innerHTML = year+"."+month+"."+(date-1)+"("+whatDay(whattoday-1)+")";
    document.getElementById("prev_match").innerHTML = year+"."+month+"."+(date-2)+"("+whatDay(whattoday+5)+")";
    document.getElementById("next_match").innerHTML = year+"."+month+"."+(date+1)+"("+whatDay(whattoday+1)+")";
}else{
    document.getElementById("today_match").innerHTML = year+"."+month+"."+date+"("+whatDay(whattoday)+")";
    if(whattoday===2){
        document.getElementById("prev_match").innerHTML = year+"."+month+"."+(date-2)+"("+whatDay(whattoday-2)+")";
    }else{
        document.getElementById("prev_match").innerHTML = year+"."+month+"."+(date-1)+"("+whatDay(whattoday-1)+")";
    }
    document.getElementById("next_match").innerHTML = year+"."+month+"."+(date+1)+"("+whatDay(whattoday+1)+")";
}



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