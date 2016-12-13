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
    
    // PLAYER UP AND DOWN 
    
    $('#musicplayerbtn').click(function(){
        $('#musicplayerbtn').toggleClass('clicked');
        if($('#musicplayerbtn').hasClass('clicked')){
            $('#musicplayercontainer').css({'bottom':'0px','transition':'all ease 1s','opacity':'1'});  
            $('#musicplayerbtn').css({'background-image':'url(../assets/img/musicplayerbtn_up.svg)','transiton':'all ease 1s'});
            
            
        }
       else{
           $('#musicplayercontainer').css({'bottom':'-250px','transition':'all ease 1s','opacity':'1'}); 
           $('#musicplayerbtn').css({'background-image':'url(../assets/img/musicplayerbtn_down.svg)','transiton':'all ease 1s'});
        }
        
    });
    
    
    
    /** ARTISTS PAGE **/
    
 
    
    
});




var init = {
    
    
    index : function(){
        $('#biglogo').css({'top':'30%','transition':'all ease 1s','opacity':'1'});
        $('#pitch p').css({'left':'0','transition':'all ease 1s','opacity':'1'});
     
        $('#pitch h2').animate({'left':'0'},500,'linear',function(){
                $('.section').each(function(i){
                    setTimeout(function(){
                    $('.section').eq(i).css('opacity','1');
                    $('.section h3').eq(i).css({'bottom':'-60px','transition':'all ease 1s','opacity':'1'});
                    },300 * (i+1));
                });     
        });
        $('#uppernavitems img,#uppernavitems [type=text]').css({'opacity':'1','transition':'all ease 1s'}); 
        $('main').fadeIn(600);
        
    },
    
    artist : function(){
        $('.artist').click(function(){
            $(this).toggleClass('artist-clicked');
            
            if($(this).hasClass("artist-clicked")){
                $('#biggie').css({'left':'0px','transition':'all ease 1s','width':'30%'}); 
            }
            else{
                $('#biggie').css({'left':'0px','transition':'all ease 1s','width':'100%'}); 
            }
//            else if($('.artist').not( ".artist-clicked" )){
//                $('.artist').addClass('artist-not-clicked');
//                console.log("PLIIIIIZE");
//            }
//            else{
//                $('.artist').removeClass('artist-clicked');
//            }
                

        });
        
        $('#uppernavitems img,#uppernavitems [type=text]').css({'opacity':'1','transition':'all ease 1s'}); 
        $('main').fadeIn(600);
    },
    
    artistprofile : function(){
        
        $('.artist_profile').fadeIn(600);
    },
    
    themes : function(){
        
        $('.theme').click(function(){
            $(this).toggleClass('clicked');
            $(this).siblings(".theme").toggleClass("notselected");
            console.log("hi");
        });
        
         $('#uppernavitems img,#uppernavitems [type=text]').css({'opacity':'1','transition':'all ease 1s'}); 
        $('main').fadeIn(600);
    },
    
    clickartist : function(){
        
    // ISSUE AT THE RELOAD OF INDEX - CLASS CLICKS DONT WORK ANYMORE - FIX THAT ISH !  ! IMPORTANT 
        
      $('.artists').on('click', function () {       
        $('main').fadeOut(600, function () {
            $('main').load('../../tpl/artists_load.html', init.artist)
        });
    });
        
    },
    
}

    
/** AUDIO PLAYER ERWAN **/


player.audio = document.getElementById('audio');    
    
    $('.play').click(player.play);
    $('.pause').click(player.stop);
    player.audio.addEventListener('timeupdate', player.update)
});

function formatSecondsAsTime(secs, format) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

  if (min < 10){ 
    min = "0" + min; 
  }
  if (sec < 10){ 
    sec  = "0" + sec;
  }

  return min + ':' + sec;
}

var player = {
    audio : null,

    play : function(){
        player.audio.play();
    },

    stop : function(){
        player.audio.stop();
    },

    update : function(track){
        var currTimeDiv = $('.time');
        
        var currTime = Math.floor(player.audio.currentTime).toString(); 
        var duration = Math.floor(player.audio.duration).toString();

        var currentprc = Math.floor((player.audio.currentTime/player.audio.duration)*100);

        $('.cashtraker').css('width', (100-currentprc)+'%');



        currTimeDiv.text(formatSecondsAsTime(currTime));
    }


