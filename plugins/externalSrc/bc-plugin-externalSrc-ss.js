videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
  var gamename = document.querySelector('#aarpAdUnitCustom');
  var triviaGame = (gamename && gamename.content.match('gamename=aarp-trivia')) ? true : false;
  var pageRefresh = (typeof performance == 'object') ? performance.navigation.type : false;
  var bcplaycapAdPlayed = sessionStorage.getItem('bcplaycapAdPlayed');
  var gameTarget = false;

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

  // var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
  // if(playerSource){
  //   console.log('playerSource' + playerSource);
  //   player.src(playerSource);
  // }
  
  player.on('adend', function(evt) {
    if(window.location.href == 'https://stayingsharp-l.aarp.org/articles/mindful/long-term-meditators.html'){
     // window.location.href = '/games-play/ss-games/path-finder/'
      window.location.href = 'https://stayingsharp-pi.aarp.org/games-play/ss-games/path-finder/'
    }
    document.querySelectorAll(".sharp-c-button")[1].addEventListener("click", function(event) {
     var videojsId = document.querySelector('.video-js video');
         videojsId.play();
         event.preventDefault();
}, false);
  });
});
