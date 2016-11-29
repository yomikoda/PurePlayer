$(function(){
   
    /** BURGER CLICK Handling - Nav/logo/burger changes **/
    $('#burger').on('click', function(){
            $('#burger').toggleClass('rotated');
            
        if($('#burger').hasClass('rotated')){
            $('#burgermenu').css({'right':'125px','transition':'all ease 1s','opacity':'1'});
        }else{
           $('#burgermenu').css({'right':'-700px','transition':'all ease 1s','opacity':'0'}); 
        }
        
    });
    

    
    
});