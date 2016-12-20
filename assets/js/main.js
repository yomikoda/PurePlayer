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
        
        init.animindex();
       
        $('main').fadeIn(600);
        
        init.clickindex();   
        
    },
    

    animindex : function(){
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
    },
    
    artist : function(){
         $('.artist').click(function(){
            $(this).toggleClass('artist-clicked');
            $(this).siblings(".artist").toggleClass("artist-not-clicked");      
             console.log("HEY");
        });


        $('#uppernavitems img,#uppernavitems [type=text]').css({'opacity':'1','transition':'all ease 1s'});
        init.artistprofile(); 
        $('main').fadeIn(600);
    },
    
    
    artistprofile : function(){
        
        $('.artist').click(function(){  
            console.log("YO");
            $('.artist_content').fadeOut(600, function () {                     
                $('.artist_content').load('../../tpl/load/artists_profile.html');
            });
            $('.artist_content').fadeIn(600);
            console.log("AM I WORKING YET MA ?");
        });

    },
    
    themes : function(){
        
        $('.theme').click(function(){
            $(this).toggleClass('clicked');
            $(this).siblings(".theme").toggleClass("notselected");
        });
        
         $('#uppernavitems img,#uppernavitems [type=text]').css({'opacity':'1','transition':'all ease 1s'}); 
        $('main').fadeIn(600);
    },
    genres : function(){
         $('.genre').click(function(){
            $(this).toggleClass('clicked');
            $(this).siblings(".genre").toggleClass("notselected");
        });
         $('#uppernavitems img,#uppernavitems [type=text]').css({'opacity':'1','transition':'all ease 1s'}); 
        $('main').fadeIn(600);
    },
    playlists : function(){
         $('.playlist').click(function(){
            $(this).toggleClass('clicked');
            $(this).siblings(".playlist").toggleClass("notselected");
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
    clickindex : function(){
        
        $('.artists').on('click', function () {       
                $('main').fadeOut(600, function () {
                    $('main').load('../../tpl/load/artists_load.html', init.artist)
                });
            });


            $('.themes').click(function(){
                $('main').fadeOut(600, function () {
                    $('main').load('../../tpl/load/themes_load.html', init.themes)
                });
            });

            $('.genre').click(function(){
                $('main').fadeOut(600, function () {
                    $('main').load('../../tpl/load/genre_load.html', init.artist)
                });
            });

            $('.playlists').click(function(){
                $('main').fadeOut(600, function () {
                    $('main').load('../../tpl/load/playlists_load.html', init.artist)
                });
            });


            $('#logo_nav').click(function(){
                $('main').fadeOut(600, function () {
                    $('main').load('../../tpl/load/mainindex_load.html', init.index)
                });
            });

            // ARTIST PAGE LOADS

            $('.artist').on('click', function () {       
                $('.artist_profile').fadeOut(600, function () {
                    $('.artist_profile').load('../../tpl/load/artistprofile.html', init.artistprofile)
                });
            });
    }
}

    


