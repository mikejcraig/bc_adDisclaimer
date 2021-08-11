videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
  var gamename = document.querySelector('#aarpAdUnitCustom');
  var triviaGame = (gamename && gamename.content.match('gamename=aarp-trivia')) ? true : false;
  var pageRefresh = (typeof performance == 'object') ? performance.navigation.type : false;
  var bcplaycapAdPlayed = localStorage.getItem('bcplaycapAdPlayed');

  var setFrequencyCap = function() {
    var now = new Date();
    var time = now.getTime();
    //5 mins
    // 15 mins 900 * 1000
    time += 900 * 1000;
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

  if(gamesStageSite && !triviaGame) {
//	    var gameTarget = (window.document.getElementsByName('aarpAdUnit').length > 3 && window.document.getElementsByName('aarpAdUnit')[2].content == 'arcade') ? true : false;
	    var gameTarget = true;
	  var cookieValue = window.document.cookie.split('; ').find(row => row.startsWith('bcplaycap'));
    if(gameTarget){
    	  if(!!cookieValue) {
	    console.log('NavigationType ' + pageRefresh);  
            window.document.getElementsByClassName('vjs-big-play-button')[0].remove();
            setTimeout(function(){
              insertButton();
              $aarpe( '.vjs-big-play-button.altstyle' ).click(function( event ) {
                event.preventDefault();
                myPlayer = videojs.getAllPlayers()[0];
                myPlayer.src({ type: "video/mp4", src: null });
              });
            }, 1000);
    	  } else {
		localStorage.removeItem('bcplaycapAdPlayed');
    	  	setFrequencyCap();
    	  }
    }
  }

  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
  if(playerSource){
    console.log('playerSource' + playerSource);
    player.src(playerSource);
  }
	
 player.on('ads-click',function( evt ){
    localStorage.setItem('bcplaycapAdPlayed', 'trueclick');
  });
 player.on('play',function( evt ){
    localStorage.setItem('bcplaycapAdPlayed', 'trueplaystarted');
  });	
});
