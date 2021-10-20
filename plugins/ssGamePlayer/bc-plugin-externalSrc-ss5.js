videojs.registerPlugin('ssGamePlayer', function() {
  var player = this;
  var vidJs = window.document.querySelector('.video-js.bc-player-zPcr0MN8ga_default');
  var demographicDataStorage = localStorage.getItem('DemographicData');
  // var demographicDataStorageValue = (demographicDataStorage) ? JSON.parse(demographicDataStorage) : false;
  var demographicDataStorageValue = (demographicDataStorage) ? false : false;
  var posterImage = (document.location.host.match('cms')) ? document.location.pathname.split('/')[document.location.pathname.split('/').length -1].split('.html')[0] : document.location.pathname.split('/')[2];
  var gamesList = {
          'path-finder': {
              'url': '/games-play/ss-games/path-finder/',
              'counter': 1
          },
          'path-finder1': {
              'url': '/games-play/ss-games/path-finder/',
              'counter': 1
          },
          'ready-steady-count': {
              'url': 'https://braingames1.aarp.org/ready-steady-count.html',
              'counter': 1
          },         
          'ready-steady-count1': {
              'url': 'https://braingames1.aarp.org/ready-steady-count.html',
              'counter': 1
          }
        }

  vidJs.classList.add(posterImage);

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

  if (!demographicDataStorageValue || demographicDataStorageValue === true) {
      vidJs.classList.add('ss-game-play');

      document.querySelectorAll('a.sharp-c-button')[0].addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log('event' + event);
      console.log('this player' + player);

      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button--disabled');
      // var videojsId = document.querySelector('.video-js video');
      // var videojsId = document.querySelectorAll(".video-js video[data-player='zPcr0MN8ga']")[0];
      // videojsId.play();
      player.play();
  });

  } else {
    insertButton();
  }


// if (demographicDataStorageValue) {
//   document.querySelectorAll('a.sharp-c-button')[0].addEventListener('click', (event) => {
//       event.preventDefault();
//       event.stopPropagation();
//       console.log(event);
//       document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button-bg-pebblegrey');
//       document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button--disabled');
//       var videojsId = document.querySelector('.video-js video');
//       videojsId.play();
//   });
// }
  
  player.on('adend', function(evt) {
   // if(window.location.href == 'https://stayingsharp-l.aarp.org/articles/mindful/long-term-meditators.html'){
     // window.location.href = '/games-play/ss-games/path-finder/';
     window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
   // }
  });
});
