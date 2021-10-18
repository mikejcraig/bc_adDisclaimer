videojs.registerPlugin('ssGamePlayer', function() {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
  var gamename = document.querySelector('#aarpAdUnitCustom');
  var bcplaycapAdPlayed = localStorage.getItem('bcplaycapAdPlayed');

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

// document.querySelectorAll(".sharp-c-button")[0].addEventListener("click", function(event) {
//      var videojsId = document.querySelector('.video-js video');
//          videojsId.play();
//          event.preventDefault();
// }, false);

document.querySelector('a.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link').addEventListener("click", function(event) {
     var videojsId = document.querySelector('.video-js video');
console.log('click blocked');
  videojsId.play();
         event.preventDefault();
}, false);
  
  player.on('adend', function(evt) {
   // if(window.location.href == 'https://stayingsharp-l.aarp.org/articles/mindful/long-term-meditators.html'){
   //   window.location.href = '/games-play/ss-games/path-finder/';
    window.location.href = 'https://stayingsharp-s.aarp.org/games-play/ss-games/path-finder/';
    console.log('page forwarded');

   // }
  });
});
