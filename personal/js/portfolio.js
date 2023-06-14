const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const s_wid = slider.offsetWidth;
const s_li = slider.children;
let win_wid = window.innerWidth;
let slide_move_max = (s_wid - (win_wid/3)) * -1;
let slide_move = 0;


container.addEventListener('wheel',function(e){
    move_slider(e.deltaY);
});

function move_slider(amount){
    slide_move -= amount;
    if(slide_move < slide_move_max){
        slide_move = slide_move_max;
        return;
    }else if(slide_move > 0){
        slide_move = 0;
        return;
    }
    slider.style.transform = `translateX(${slide_move}px)`;
}

$(".circle").click(function() {
    var url = $(this).find('a').attr("href");
    $(this).css({'z-index':99});
    $(this).animate({
        width: 9999,
        height: 9999
    },500, function() {
        location.href = url;
    });
    return false;
});