videojs.registerPlugin('ssGamePlayer', function() {
  var player = this;
  var vidJs = window.document.querySelector('.video-js.bc-player-zPcr0MN8ga_default');
  var demographicDataStorage = localStorage.getItem('DemographicData');
  var demographicDataStorageValue = (demographicDataStorage && JSON.parse(demographicDataStorage) == false) ? false : true;
  // var demographicDataStorageValue = (demographicDataStorage) ? false : false;
  var posterImage = (document.location.host.match('cms')) ? document.location.pathname.split('/')[document.location.pathname.split('/').length -1].split('.html')[0] : document.location.pathname.split('/')[2];
  var playButtonPosition = window.document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].getBoundingClientRect();
  var bigPlayPosition = window.document.querySelectorAll('.vjs-big-play-button')[0];
  var gamesList = {
          'path-finder': {
              'url': '/games-play/ss-games/path-finder/',
              'counter': 1
          },
          'path-finder1': {
              'url': '/games-play/ss-games/path-finder/',
              'counter': 1
          },
          'pattern-match': {
              'url': '/games-play/ss-games/pattern-match/',
              'counter': 1
          },
          'pattern-match1': {
              'url': '/games-play/ss-games/pattern-match/',
              'counter': 1
          },
          'ready-steady-count': {
              'url': 'https://braingames1.aarp.org/ready-steady-count.html',
              'counter': 1
          },         
          'ready-steady-count1': {
              'url': 'https://braingames1-s.aarp.org/ready-steady-count.html',
              'counter': 1
          }
        }

  vidJs.classList.add(posterImage);
  if(document.querySelectorAll('.embeddedBrightcoveVideoPlayer')[0].nextElementSibling.querySelectorAll('a[role=button]').length == 1) {
    vidJs.classList.add('ss-game-play-1-button');
  }
  // document.addEventListener('DOMContentLoaded', fn);
  // fn();
  var fn = function() {
    // bigPlayPosition.style.left = (playButtonPosition.x) + 'px';
    // bigPlayPosition.style.top = playButtonPosition.y + 'px';
  }

   var getScreenWidth = function() {
        windowWidthScrn = window.document.documentElement.clientWidth;
    if (windowWidthScrn < 768) {
        //Mobile Viewport
        scrn = 2;
    } else if (windowWidthScrn > 767 && windowWidthScrn < 1025) {
        //Tablet Viewport
        scrn = 1;
    } else {
        //Desktop Viewport
        scrn = 0;
    }
    return scrn;
  };

  var deviceType = getScreenWidth();
console.log(deviceType);

  var insertButton = function() {
    // var vidJs = window.document.querySelector('.video-js.bc-player-zPcr0MN8ga_default');
    var iDiv = window.document.createElement('a');
        iDiv.setAttribute('aria-hidden', 'true');
        iDiv.setAttribute('tabindex', '-1');
        iDiv.setAttribute('data-functionality', 'link');
        iDiv.setAttribute('data-formelementid', 'staying-sharp-game-landing-page-btn-clk-play-path-finder');
        iDiv.className = 'ss-big-play sharp-js-demographic-trigger';
        iDiv.href=gamesList[document.location.pathname.split('/')[2]].url;
        iDiv.target="_self";
    vidJs.append(iDiv);
  }

  if (demographicDataStorageValue) {
      vidJs.classList.add('ss-game-play');
if(deviceType == 0) {
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
}

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
 
  player.on('ads-request', function(evt) {
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button--disabled');
  });

  
  player.on('ads-ad-ended', function(evt) {
   // if(window.location.href == 'https://stayingsharp-l.aarp.org/articles/mindful/long-term-meditators.html'){
     // window.location.href = '/games-play/ss-games/path-finder/';
    if (deviceType == 0) {
         window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
    } else {
     player.dispose();
     var emptyBC = document.querySelectorAll('.embeddedBrightcoveVideoPlayer .brightcove-container')[0];
        emptyBC.classList.add(document.location.pathname.split('/')[2]);
     var iDiv2 = window.document.createElement('a');
        iDiv2.className = 'vjs-poster bc-player-zPcr0MN8ga_default video-js';
        iDiv2.href=gamesList[document.location.pathname.split('/')[2]].url;
    emptyBC.append(iDiv2);     
//window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
    var timeoutTime = 250;
       setTimeout(function(){
   window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
  }, timeoutTime);
    }    
   // }
  });

});
