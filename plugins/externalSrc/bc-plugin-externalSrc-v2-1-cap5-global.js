videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
  var gamesStageSiteEnabled = (window.location.host == 'arenax-testing-games.aarp.org') ? true : false;

  var gamename = document.querySelector('#aarpAdUnitCustom');
  var triviaGame = (gamename && gamename.content.match('gamename=aarp-trivia') && document.location.pathname == '/games/aarp-trivia') ? true : false;
//   var triviaGame = (gamename && gamename.content.match('gamename=aarp-trivia')) ? true : false;

  var pageRefresh = (typeof performance == 'object') ? performance.navigation.type : false;
  var bcplaycapAdPlayed = sessionStorage.getItem('bcplaycapAdPlayed');

  var setFrequencyCap = function() {
    var now = new Date();
    var time = now.getTime();
    // minute * 60 * 1000
    time += 5 * 60 * 1000;
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

  // var parentAdContainer = document.querySelector('.bc-player-NI7d9M1tR_default.vjs-ad-controls.vjs-ad-playing');

  // if (gamesStageSiteEnabled && parentAdContainer) {
  //     parentAdContainer.classList.addClass('games-staging');
  // }

  if(gamesStageSite && !triviaGame) {
//	    var gameTarget = (window.document.getElementsByName('aarpAdUnit').length > 3 && window.document.getElementsByName('aarpAdUnit')[2].content == 'arcade') ? true : false;
	    var gameTarget = true;
	  var cookieValue = window.document.cookie.split('; ').find(row => row.startsWith('bcplaycap'));
    if(gameTarget){
    	  if(!!cookieValue && bcplaycapAdPlayed == 'true') {
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
		sessionStorage.removeItem('bcplaycapAdPlayed');
    	  	setFrequencyCap();
    	  }
    }
  }

  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
  if(playerSource){
    console.log('playerSource' + playerSource);
    player.src(playerSource);
  }

player.on('ima3-started', function () {
  var parentAdContainer = document.querySelector('.bc-player-NI7d9M1tR_default.vjs-ad-controls.vjs-ad-playing');
  if (gamesStageSiteEnabled && parentAdContainer) {
      parentAdContainer.classList.add('games-staging');
  }
    });	
	
  player.on('adend', function(evt) {
      sessionStorage.setItem('bcplaycapAdPlayed', 'true');
  });
});
