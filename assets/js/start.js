$(function(){
   

 
    $( document ).ready(function() {
        $('#biglogo').css({'top':'40%','transition':'all ease 2s','opacity':'1'});
        $('#pitch p').css({'left':'0','transition':'all ease 2s','opacity':'1'});
     
         $('#pitch h2').animate({'left':'0'},3000,'linear',function(){
                  $('.section').each(function(i){
                    setTimeout(function(){
                    $('.section').eq(i).css('opacity','1');
                    },500 * (i+1));
                });     
            });
        $('.section h3').css({'bottom':'-60px','transition':'all ease 1s','opacity':'1'});
         
    });
   
});