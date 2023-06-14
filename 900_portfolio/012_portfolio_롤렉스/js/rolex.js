var video=$('#mont_video');
    var btn=$('#mont_btn');
    btn.click(function(){
        if(video.get(0).paused){
            video.get(0).play();
            btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
        }else{
            video.get(0).pause();
            btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
        }
    });