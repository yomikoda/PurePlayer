
// LOAD Page 
    
   
      
    
    $('#burgermenu>nav>ul>li:first-child').on('click', function () {
       
		$('main').fadeOut(600, function () {
            $('head').append('<link rel="stylesheet" type="text/css" href="../assets/css/start.css">');
            console.log('Stylesheet added');
            
            console.log('JS script added');
			$('main').load('../../tpl/landing.html',function(){
				$('main').fadeIn(600);
               $('#biglogo').css({'top':'30%','transition':'all ease 2s','opacity':'1'});
        $('#pitch p').css({'left':'0','transition':'all ease 2s','opacity':'1'});
     
         $('#pitch h2').animate({'left':'0'},2000,'linear',function(){
                  $('.section').each(function(i){
                    setTimeout(function(){
                    $('.section').eq(i).css('opacity','1');
                    $('.section h3').eq(i).css({'bottom':'-60px','transition':'all ease 1s','opacity':'1'});
                    },300 * (i+1));
                });     
            });
        
                });
		});
	});
    
