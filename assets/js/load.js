
// LOAD Page       
    
$('.artists').on('click', function () {       
    $('main').fadeOut(600, function () {
        $('main').load('../../tpl/artists_load.html', init.artist)
    });
});


    
  
    