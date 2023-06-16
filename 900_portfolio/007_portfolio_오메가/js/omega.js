window.onload=function(){
    beBright();
    setTimeout(playVideo, 300)
    setTimeout(beDark, 4500);
    setTimeout(removeVideo, 5500);
    setTimeout(beBright, 6000);
}

function beBright(){
    $('.curtain').fadeOut(1000);
}
function beDark(){
    $('.curtain').fadeIn(1000);
}
function playVideo(){
    $('video').get(0).play();
}
function removeVideo(){
    $('video').hide();
}