videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : false;

  var setFrequencyCap = function() {
    var now = new Date();
    var time = now.getTime();
    //5 mins 
    // 15 mins 900 * 1000
    time += 300 * 1000;
    now.setTime(time);
    window.document.cookie = 'bcplaycap=' + 'true' + '; expires=' + now.toUTCString() + '; path=/';
  }

  var insertButton = function() {
    var vidJs = window.document.getElementsByTagName('video-js')[0];
    var iDiv = window.document.createElement('div');
        iDiv.setAttribute('aria-hidden', 'false');
        iDiv.className = 'vjs-big-play-button altstyle';
    var iDivP = window.document.createElement('p');
        iDivP.setAttribute('aria-hidden', 'true');
        iDivP.className = 'vjs-icon-placeholder';
    iDiv.append(iDivP);    
    vidJs.append(iDiv);
  }

  if(gamesStageSite){
	    var gameTarget = (window.document.getElementsByName('aarpAdUnit').length > 3 && window.document.getElementsByName('aarpAdUnit')[2].content == 'mahjongg') ? true : false;
      var cookieValue = window.document.cookie.split('; ').find(row => row.startsWith('bcplaycap'));
    if(gameTarget){
    	  if(!!cookieValue) {
          insertButton();
          window.document.getElementsByClassName('vjs-big-play-button')[0].remove();

          $aarpe( '.vjs-big-play-button.altstyle' ).click(function( event ) {
            event.preventDefault();
            myPlayer = videojs.getAllPlayers()[0];
            myPlayer.src({ type: "video/mp4", src: null });
          });
    	  } else {
    	  	setFrequencyCap();
    	  }
    }
  }
  
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
  if(playerSource){
    console.log('playerSource' + playerSource);
    player.src(playerSource);
  }
});
