
// LOAD Page       

// INDEX PAGE 

// FOR THESE TO WORK NEED TO PUT ALL THESE IN THE INIT TOO

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
        $('main').load('../../tpl/load/genre_load.html', init.genres)
    });
});

$('.playlists').click(function(){
    $('main').fadeOut(600, function () {
        $('main').load('../../tpl/load/playlists_load.html', init.playlists)
    });
});


$('#logo_nav').click(function(){
    $('main').fadeOut(600, function () {
       
        $('main').load('../../tpl/load/mainindex_load.html', init.index)
    });
});


    
  
    