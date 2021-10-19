videojs.registerPlugin('ssGamePlayer', function() {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
  var vidJs = window.document.querySelector('.video-js.bc-player-zPcr0MN8ga_default');
  var demographicDataStorage = localStorage.getItem('DemographicData');
  var demographicDataStorageValue = (demographicDataStorage) ? JSON.parse(demographicDataStorage) : false;
// <a aria-hidden="true" tabindex="-1" href="/games-play/ss-games/path-finder/" data-functionality="link" data-formelementid="staying-sharp-game-landing-page-btn-clk-play-path-finder" target="_self">

  var insertButton = function() {
    // var vidJs = window.document.querySelector('.video-js.bc-player-zPcr0MN8ga_default');
    var iDiv = window.document.createElement('a');
        iDiv.setAttribute('aria-hidden', 'true');
        iDiv.setAttribute('tabindex', '-1');
        iDiv.setAttribute('data-functionality', 'link');
        iDiv.setAttribute('data-formelementid', 'staying-sharp-game-landing-page-btn-clk-play-path-finder');
        iDiv.className = 'ss-big-play sharp-js-demographic-trigger';
        iDiv.href='/games-play/ss-games/path-finder/';
        iDiv.target="_self";
    vidJs.append(iDiv);
  }

  if (demographicDataStorageValue) {
    vidJs.classList.add('ss-game-play');
  } else {
    insertButton();
  }

if (demographicDataStorageValue) {
  document.querySelectorAll('a.sharp-c-button')[0].addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log(event);
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button--disabled');
      var videojsId = document.querySelector('.video-js video');
      videojsId.play();
  });
}
  
  player.on('adend', function(evt) {
   // if(window.location.href == 'https://stayingsharp-l.aarp.org/articles/mindful/long-term-meditators.html'){
     window.location.href = '/games-play/ss-games/path-finder/'
   // }
  });
});
