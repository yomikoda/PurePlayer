$(function(){
   
    $('#art1').animate({'width':'1000px'},1000,'linear',function(){
            $('#art2').animate({'width':'1000px'},1000,'linear',function(){
                $('#art3').animate({'width':'1000px'},1000);        
            });        
        }); 
 
    $( document ).ready(function() {
        $('#biglogo').css({'top':'40%','transition':'all ease 3s','opacity':'1'});
        $('#pitch p').css({'left':'0','transition':'all ease 3s','opacity':'1'});
        $('#pitch h2').css({'left':'0','transition':'all ease 3s','opacity':'1'});
        
         
    });
    //FIND A FING WAY TO DELAY THIS ! >.<
    $('.section').each(function(i){
                setTimeout(function(){
                $('.section').eq(i).css('opacity','1');
                },500 * (i+1));
        });
});