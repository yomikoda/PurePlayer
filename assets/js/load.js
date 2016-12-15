
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


    
  
    