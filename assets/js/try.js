

$('.theme').click(function(){
    $(this).toggleClass('clicked');
    $(this).siblings(".theme").addClass("notselected");
    console.log("hi");
    if($('.theme').hasClass('clicked')){  
          $('.notselected').css({'display':'none','transition':'all ease 1s','opacity':'1'});     
        }
       else{
         $('.notselected').css({'display':'visible','transition':'all ease 1s','opacity':'1'});    
        }
    
});