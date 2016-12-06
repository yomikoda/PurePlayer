
// LOAD Page 
    
   
      
    
    $('#burgermenu>nav>ul>li:first-child').on('click', function () {
       
		$('main').fadeOut(600, function () {
         
			$('main').load('../../tpl/landing.html',function(){
				$('main').fadeIn(600);
                
                });
		});
	});
    
  
    