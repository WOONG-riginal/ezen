$('.ques').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).siblings('.answ').slideUp();
    }else{
        $(this).addClass('active');
        $(this).siblings('.answ').slideDown();
    }
    if($(this).hasClass('mark')){
        $(this).removeClass('mark');
    }else{
        $(this).addClass('mark');
    }
});

$('a').click(function(e){
    e.preventDefault();
});