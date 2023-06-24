$('h2').eq(0).css({opacity:1});


let step = 0;

$('div').click(function(){
    step += 1;
    console.log(step);
    if((step%2) === 1){
        $(this).css({background:'#000', 'border-style':'solid', opacity:1});
        $('h2').eq(0).css({opacity:0});
        $('h2').eq(1).css({opacity:1});
    }else if((step%2) === 0){
        $(this).css({background:'#fff', 'border-style':'solid', opacity:1});
        $('h2').eq(0).css({opacity:1});
        $('h2').eq(1).css({opacity:0});
    }
})


$('button').click(function(){
    window.location.reload();
})