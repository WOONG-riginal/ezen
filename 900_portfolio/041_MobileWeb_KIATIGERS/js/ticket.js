$('#myBtn').on('click',myFunction);
// EventListener
function myFunction(){
    var dots=$('#dots');
    var moreButton=$('#more');
    var btnText=$('#myBtn');
    var result=$('#dots').css('display');
    console.log(result);
    if(result=='none'){
        dots.css({display:'inline'})
        moreButton.css({display:'none'})
        btnText.text('+MORE')
    }else{
        dots.css({display:'none'})
        moreButton.css({display:'inline'})
        btnText.text('CLOSE')
    }
}