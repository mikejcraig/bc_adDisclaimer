videojs.registerPlugin('externalSrc', function(options) {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
  var gamesStageSiteEnabled = (window.location.host == 'arenax-testing2-games.aarp.org') ? true : false;
  var gamesStageSiteEnabled2 = (window.location.host == 'arenax-testing-games.aarp.org') ? true : false;
  var isMobileViewport =  document.documentElement.clientWidth < 768;
  var userAgent = typeof navigator;
  // var userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';
  var isSafari = (userAgent != 'undefined') && navigator.userAgent.match("Safari");
  var isAndroid  = (userAgent != 'undefined') && navigator.userAgent.match("Chrome");
  var v4app = isMobileViewport && (isSafari || isAndroid);

  var gamename = document.querySelector('#aarpAdUnitCustom');
  var triviaGame = (gamename && gamename.content.match('gamename=aarp-trivia') && document.location.pathname == '/games/aarp-trivia') ? true : false;
//   var triviaGame = (gamename && gamename.content.match('gamename=aarp-trivia')) ? true : false;

  var pageRefresh = (typeof performance == 'object') ? performance.navigation.type : false;
  var bcplaycapAdPlayed = sessionStorage.getItem('bcplaycapAdPlayed');
  var fcap = (options && options.pageVariables.frequency_cap.length > 0) ? options.pageVariables.frequency_cap : 10;
  var setFrequencyCap = function() {
    var now = new Date();
    var time = now.getTime();
    // minute * 60 * 1000
    time += Number(fcap) * 60 * 1000;
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
    if(gameTarget && !gamesStageSiteEnabled){
    	  if(!!cookieValue && bcplaycapAdPlayed == 'true'|| v4app == null && gamesStageSiteEnabled2 == false) {
	    console.log('NavigationType ' + pageRefresh);
            window.document.getElementsByClassName('vjs-big-play-button')[0].remove();
            setTimeout(function(){
              insertButton();
              document.querySelector('.vjs-big-play-button.altstyle').addEventListener('click', function(event) {
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

    if(gameTarget && gamesStageSiteEnabled){
      var puzzleCat = document.querySelector('meta#aarpAdUnit3').content;
      window.document.querySelector('video-js').classList.add('games-player');
      if (puzzleCat == 'arcade') {
        window.document.querySelectorAll("#aarpAdUnit3")[0].content = 'daily';
        window.document.querySelectorAll("#aarpAdUnit4")[0].content = 'mobile-gameplay';
      }
    	  if(!!cookieValue && bcplaycapAdPlayed == 'true') {
	    console.log('NavigationType ' + pageRefresh);
            window.document.getElementsByClassName('vjs-big-play-button')[0].remove();
            setTimeout(function(){
              insertButton();
              // $aarpe( '.vjs-big-play-button.altstyle' ).click(function( event ) {
              //   event.preventDefault();
              //   myPlayer = videojs.getAllPlayers()[0];
              //   myPlayer.src({ type: "video/mp4", src: null });
              // });

                window.document.querySelectorAll('.vjs-big-play-button.altstyle')[0].addEventListener('click', (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    window.document.querySelectorAll("#aarpAdUnit3")[0].content = 'daily';
                    window.document.querySelectorAll("#aarpAdUnit4")[0].content = 'mobile-gameplay';
                    console.log('Eve ' + event);
                      myPlayer = videojs.getAllPlayers()[0];
                      myPlayer.src({ type: "video/mp4", src: null });
                });

            }, 1000);
    	  } else {
		sessionStorage.removeItem('bcplaycapAdPlayed');
    	  	setFrequencyCap();
    	  }

        this.on('loadedmetadata', function() {
            if (window.googletag && puzzleCat == 'arcade') {
                googletag.pubads().addEventListener('impressionViewable', function(event) {
                    var slot = event.slot;
                    var mobileSlot = document.querySelector("#ad-mobile-gameplay");
                    if(mobileSlot) {
                      window.document.querySelectorAll("#aarpAdUnit3")[0].content = 'daily';
                      window.document.querySelectorAll("#aarpAdUnit4")[0].content = 'mobile-gameplay';
                    }
                });
            }
        });

    }

    if(gameTarget && gamesStageSiteEnabled2){
      window.document.querySelector('video-js').classList.add('games-player');
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

var windowWidthScrn = document.documentElement.clientWidth;
 if (windowWidthScrn < 768) {
      this.on('loadedmetadata', function() {
	setTimeout(function() {
              googletag.pubads().refresh(googletag.pubads().getSlots().filter(function(slot){
                if(slot.getSlotElementId() == "adslot1010"){
                  var mobSlot = document.querySelector("#adslot1010 > div > iframe");
                    if (mobSlot == null) {
                    return slot
                  }
                }
              }));
	}, 1000);
      });
 }
// 	 if (gamesStageSiteEnabled2) {
//   document.querySelector('#container-81ea044270').setAttribute('data-scroll', false);
//   document.querySelector('#container-81ea044270').id = '';
//   AARP.header.sticky = false;
// }
});
