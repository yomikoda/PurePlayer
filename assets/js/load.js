
// LOAD Page       

// INDEX PAGE 
    
$('.artists').on('click', function () {       
    $('main').fadeOut(600, function () {
        $('main').load('../../tpl/artists_load.html', init.artist)
    });
});


$('.themes').click(function(){
    $('main').fadeOut(600, function () {
        $('main').load('../../tpl/themes_load.html', init.artist)
    });
});

$('.genre').click(function(){
    $('main').fadeOut(600, function () {
        $('main').load('../../tpl/genre_load.html', init.artist)
    });
});

$('.playlists').click(function(){
    $('main').fadeOut(600, function () {
        $('main').load('../../tpl/playlists_load.html', init.artist)
    });
});


$('#logo_nav').click(function(){
    $('main').fadeOut(600, function () {
        $('main').load('../../tpl/mainindex_load.html', init.index)
    });
});

// ARTIST PAGE LOADS

$('.artist').on('click', function () {       
    $('.artist_profile').fadeOut(600, function () {
        $('.artist_profile').load('../../tpl/artistprofile.html', init.artistprofile)
    });
});


    
  
    