$(function(){
   
    /** BURGER CLICK Handling - Nav/logo/burger changes **/
    
    
    $('#burger').click(function(){
        $('#burger').toggleClass('rotated');
        //ERASE CONSOLE LOGS   
        if($('#burger').hasClass('rotated')){
            $('#burgermenu').css({'right':'0px','transition':'all ease 1s','opacity':'1'});
        }else{
           $('#burgermenu').css({'right':'-700px','transition':'all ease 1s','opacity':'0'}); 
        }
            
    });
     
    $('#btnplaylist').click(function(){
         $('#btnplaylist').toggleClass('clicked');
        if($('#btnplaylist').hasClass('clicked')){
            $('#playlist').css({'right':'0px','transition':'all ease 1s','opacity':'1'});    
            
            $('#btnplaylisticon').css({'border-right':'0px','transition':'all ease 1s','border-left':'20px solid #FF6B6E'}); 
        }
       else{
           $('#playlist').css({'right':'-400px','transition':'all ease 1s','opacity':'1'});
            
            $('#btnplaylisticon').css({'border-left':'0px','transition':'all ease 1s','border-right':'20px solid #FF6B6E'}); 
        }
        
    });
    
     //$("#burger:not(.rotated)").
    
    
    /** ARTISTS PAGE **/
    
 
});




var init = {
    artist : function(){
        $('.artist').click(function(){
            $(this).toggleClass('artist-clicked');
            
            if($(this).hasClass("artist-clicked")){
                $('#biggie').css({'left':'0px','transition':'all ease 1s','width':'30%'}); 
            }
            else if($('.artist').not( ".artist-clicked" )){
                $('.artist').addClass('artist-not-clicked');
                console.log("PLIIIIIZE");
            }
            else{
                $('.artist').removeClass('artist-clicked');
            }
                

        });
        
        $('link[rel=stylesheet]+link[rel=stylesheet]').remove();
        $('main').fadeIn(600);
    },
    
    themes : function(){
        
    }
    
}


