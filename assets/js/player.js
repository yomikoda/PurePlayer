/** AUDIO PLAYER ERWAN **/

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
 }

 player.audio = document.getElementById('audio');    
    
    $('.play').click(player.play);
    $('.pause').click(player.stop);
    player.audio.addEventListener('timeupdate', player.update)





    