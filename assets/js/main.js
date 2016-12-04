$(function(){
   
    /** BURGER CLICK Handling - Nav/logo/burger changes **/
    $('#burger').on('click', function(){
        $('#burger').toggleClass('rotated');
            
        if($('#burger').hasClass('rotated')){
            $('#burgermenu').css({'right':'0px','transition':'all ease 1s','opacity':'1'});
        }else{
           $('#burgermenu').css({'right':'-700px','transition':'all ease 1s','opacity':'0'}); 
        }
            if( $('#btnplaylist').hasClass('clicked') && $('#burger').hasClass('rotated')){ 
                $('#burger').css({'background-color':'white','transition':'all ease 1s'});
                $('.line').css({'background-color':'#FF6B6E','transition':'all ease 1s'});
                console.log("YUP");
            }
           
            else if( $('#btnplaylist').hasClass('clicked') && $("#burger:not(.rotated)")){ 
                $('#burger').css({'background-color':'#FF6B6E','transition':'all ease 1s'});
                $('.line').css({'background-color':'white','transition':'all ease 1s'});
                console.log("MEH");
                
            }

            else if($('#burger').hasClass('rotated')){
                $('#burger').css({'background-color':'white','transition':'all ease 1s'});
                $('.line').css({'background-color':'#FF6B6E','transition':'all ease 1s'});
                console.log("NOPE");
            }     
    });
     
    $('#btnplaylist').on('click', function(){
         $('#btnplaylist').toggleClass('clicked');
        if($('#btnplaylist').hasClass('clicked')){
            $('#playlist').css({'right':'0px','transition':'all ease 1s','opacity':'1'});    
            $('#burger').css({'background-color':'#FF6B6E','transition':'all ease 1s'}); 
            $('.line').css({'background-color':'white','transition':'all ease 1s'});
            $('#btnplaylisticon').css({'border-right':'0px','transition':'all ease 1s','border-left':'20px solid #FF6B6E'}); 
        }
       else{
           $('#playlist').css({'right':'-400px','transition':'all ease 1s','opacity':'1'});
            $('#burger').css({'background-color':'white','transition':'all ease 1s'}); 
            $('.line').css({'background-color':'#FF6B6E','transition':'all ease 1s'});
            $('#btnplaylisticon').css({'border-left':'0px','transition':'all ease 1s','border-right':'20px solid #FF6B6E'}); 
        }
        // ADD A FUNCTION CHECKCOLOR -> A functions that I can just callback when needed
    });
    
     //$("#burger:not(.rotated)").
    
});