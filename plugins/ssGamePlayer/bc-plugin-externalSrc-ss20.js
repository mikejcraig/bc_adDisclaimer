videojs.registerPlugin('ssGamePlayer', function() {
  var player = this;
  var vidJs = window.document.querySelector('.video-js.bc-player-zPcr0MN8ga_default');
  var demographicDataStorage = localStorage.getItem('DemographicData');
  var demographicDataStorageValue = (demographicDataStorage && JSON.parse(demographicDataStorage) == false) ? false : true;
  // var demographicDataStorageValue = (demographicDataStorage) ? false : false;
  var posterImage = (document.location.host.match('cms') || document.location.pathname.match('qa-bucket')) ? document.location.pathname.split('/')[document.location.pathname.split('/').length -1].split('.html')[0] : document.location.pathname.split('/')[2];
//  var playButtonPosition = window.document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].getBoundingClientRect();
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
          },
          'daily-puzzle': {
              'url': 'https://braingames1.aarp.org/daily-puzzle.html',
              'counter': 1
          },
          'test-calculation-skills': {
              'url': 'https://braingames1.aarp.org/countdown.html',
              'counter': 1
          },
          'split-words': {
              'url': 'http://braingames1.aarp.org/splitwords.html',
              'counter': 1
          },          
          'hurray-change': {
              'url': 'https://braingames1.aarp.org/Hurray_For_Change.html',
              'counter': 1
          },
          'heraldry': {
              'url': 'https://braingames1.aarp.org/heraldry.html',
              'counter': 1
          },    
          'secret-files': {
              'url': 'https://braingames1.aarp.org/secret_files.html',
              'counter': 1
          },
          'right-count': {
              'url': 'https://braingames1.aarp.org/the_right_count.html',
              'counter': 1
          },


          'private-eye': {
              'url': 'https://braingames1.aarp.org/private_eye.html',
              'counter': 1
          },
          'turn-around-around': {
              'url': 'https://braingames1.aarp.org/turn_around_and_around.html',
              'counter': 1
          },         
          'decipher': {
              'url': 'https://braingames1.aarp.org/decipher.html',
              'counter': 1
          },
          'sense-of-speed': {
              'url': 'https://braingames1.aarp.org/sense_of_speed.html',
              'counter': 1
          },
          'bubble-topia': {
              'url': '/games-play/mbs/bubble-topia/',
              'counter': 1
          },
          'wordsmith': {
              'url': '/games-play/mbs/wordsmith/',
              'counter': 1
          },          
          'memory-maze': {
              'url': '/games-play/mbs/memory-maze/',
              'counter': 1
          },
          'slingshot': {
              'url': '/games-play/mbs/slingshot/',
              'counter': 1
          },    
          'think-memory': {
              'url': '/games-play/mbs/think-memory/',
              'counter': 1
          },
          'think-balance': {
              'url': '/games-play/mbs/think-balance/',
              'counter': 1
          },

          'think-focus': {
              'url': '/games-play/mbs/think-focus/',
              'counter': 1
          },
          'think-target': {
              'url': '/games-play/mbs/think-on-target/',
              'counter': 1
          },
          'hidden-objects': {
              'url': '/games-play/brain-health-exercises/hidden-objects/',
              'counter': 1
          },          
          'tap-targets': {
              'url': '/games-play/brain-health-exercises/tap-targets/',
              'counter': 1
          },
          'swap-puzzles': {
              'url': '/games-play/brain-health-exercises/swap-puzzles/',
              'counter': 1
          },    
          'swap-puzzles1': {
              'url': '/games-play/brain-health-exercises/swap-puzzles/',
              'counter': 1
          },   
          'number-pop': {
              'url': '/games-play/brain-health-exercises/number-pop/',
              'counter': 1
          },
          'highest-bid': {
              'url': '/games-play/brain-health-exercises/highest-bid/',
              'counter': 1
          },

           'sequence-square': {
              'url': '/games-play/ss-games/sequence-square/',
              'counter': 1
          },
          'mem-machines': {
              'url': '/games-play/ss-games/mem-machines/',
              'counter': 1
          },
          'split-words-arcade': {
              'url': 'https://braingames1.aarp.org/splitwords-new.html',
              'counter': 1
          },          
          'tower-of-babel': {
              'url': 'https://braingames1.aarp.org/tower-of-babel.html',
              'counter': 1
          },
          'restaurant': {
              'url': 'https://braingames1.aarp.org/restaurant.html',
              'counter': 1
          },    
          'around-the-world': {
              'url': 'https://braingames1.aarp.org/around-the-world.html',
              'counter': 1
          },
          'shopping-list': {
              'url': '/games-play/ss-games/shopping-list/',
              'counter': 1
          },

          'which-is-different': {
              'url': '/games-play/ss-games/which-is-different/',
              'counter': 1
          },
          'full-of-blanks': {
              'url': 'https://braingames1.aarp.org/this-story-is-full-of-blanks.html',
              'counter': 1
          },
          'double-up': {
              'url': '/games-play/ss-games/double-up-game/',
              'counter': 1
          },          
          'recognition': {
              'url': '/games-play/brain-health-exercises/recognition-game/',
              'counter': 1
          },
          'mirror-map': {
              'url': '/games-play/brain-health-exercises/mirror-map-game/',
              'counter': 1
          },    
          'reading-blocks': {
              'url': '/games-play/brain-health-exercises/reading-blocks-game/',
              'counter': 1
          },
          'block-breaker1': {
              'url': '/games-play/brain-health-exercises/block-breaker-game/',
              'counter': 1
          },
          'block-breaker': {
              'url': '/games-play/brain-health-exercises/block-breaker-game/',
              'counter': 1
          },
          'stacked-disc': {
              'url': '/games-play/brain-health-exercises/stacked-disc-game/',
              'counter': 1
          }
        }
  var gameLink = (gamesList[document.location.pathname.split('/')[2]]) ? gamesList[document.location.pathname.split('/')[2]].url : '#';

  vidJs.classList.add(posterImage);
  if(document.querySelectorAll('.embeddedBrightcoveVideoPlayer').length > 0 && document.querySelectorAll('.embeddedBrightcoveVideoPlayer')[0].nextElementSibling.querySelectorAll('a[role=button]').length == 1) {
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
        iDiv.href=gameLink;
        iDiv.target="_self";
    vidJs.append(iDiv);
  }

  insertButton();

  if (demographicDataStorageValue && document.querySelectorAll('a.sharp-c-button').length > 0) {
      vidJs.classList.add('ss-game-play');
// if(deviceType == 0) {
      document.querySelectorAll('a.sharp-c-button')[0].addEventListener('click', (event) => {
          var isUhc = true;
        if (typeof(AARP) == 'object') {
          isUhc = AARP.StayingSharp.utils.isUserUHC();
        }
        if (demographicDataStorageValue && isUhc == false) {
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
    }
  });
// }

  } else {
  //  insertButton();
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
 
  player.on('adserror', function(evt) {
    console.log('adserror ' + evt);
       document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button--disabled');
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

      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.remove('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.remove('sharp-c-button--disabled');          
//window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
    var timeoutTime = 250;
       setTimeout(function(){
   window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
  }, timeoutTime);
    }   
  });

  player.on('ads-request', function(evt) {
    console.log('ads-request ' + evt);
        const playerControlBarContainer = document.querySelectorAll('.bc-player-zPcr0MN8ga_default .vjs-spacer')[1];
        playerControlBarContainer.textContent = 'Advertisement';

  //  if (deviceType == 0) {
    if (document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link').length > 0) {
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.add('sharp-c-button--disabled');
    }

        if (document.querySelectorAll('.sharp-c-lightbox__button--transparent.sharp-js-lightbox-videoPlayer.sharp-c-lightbox-videoPlayer_item').length > 0) {
      // document.querySelectorAll('.sharp-c-lightbox__button--transparent.sharp-js-lightbox-videoPlayer.sharp-c-lightbox-videoPlayer_item')[0].classList.add('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-lightbox__button--transparent.sharp-js-lightbox-videoPlayer.sharp-c-lightbox-videoPlayer_item')[0].classList.add('sharp-c-button--disabled');
    }
  //  }
  });
  
  player.on('ads-ad-ended', function(evt) {
   // if(window.location.href == 'https://stayingsharp-l.aarp.org/articles/mindful/long-term-meditators.html'){
     // window.location.href = '/games-play/ss-games/path-finder/';
    if (deviceType == 0) {
        var fUrl = (document.location.host.match('cms') || document.location.pathname.match('qa-bucket')) ? document.location.pathname.split('/')[document.location.pathname.split('/').length -1].split('.html')[0] : document.location.pathname.split('/')[2];
         window.location.href = gamesList[fUrl].url;
    } else {
     player.dispose();
     var emptyBC = document.querySelectorAll('.embeddedBrightcoveVideoPlayer .brightcove-container')[0];
        emptyBC.classList.add(document.location.pathname.split('/')[2]);
     var iDiv2 = window.document.createElement('a');
        iDiv2.className = 'vjs-poster bc-player-zPcr0MN8ga_default video-js';
        iDiv2.href=gamesList[document.location.pathname.split('/')[2]].url;
    emptyBC.append(iDiv2);

 //     document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.remove('sharp-c-button-bg-pebblegrey');
 //     document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.remove('sharp-c-button--disabled');     
//window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
    var timeoutTime = 50;
       setTimeout(function(){
   window.location.href = gamesList[document.location.pathname.split('/')[2]].url;
    if (document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link').length > 0) {      
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.remove('sharp-c-button-bg-pebblegrey');
      document.querySelectorAll('.sharp-c-button.sharp-js-demographic-trigger.sharp-c-link')[0].classList.remove('sharp-c-button--disabled'); 
      }
    if (document.querySelectorAll('.sharp-c-lightbox__button--transparent.sharp-js-lightbox-videoPlayer.sharp-c-lightbox-videoPlayer_item').length > 0) {
      document.querySelectorAll('.sharp-c-lightbox__button--transparent.sharp-js-lightbox-videoPlayer.sharp-c-lightbox-videoPlayer_item')[0].classList.remove('sharp-c-button--disabled');
    } 
  }, timeoutTime);
    }    
   // }
  });

window.addEventListener('load', () => {
  var isUhc = true;
  var msCookie = 1;
        if (typeof(AARP) == 'object') {
          isUhc = AARP.StayingSharp.utils.isUserUHC();
          msCookie = AARP.cookies.at.ms; 
        }

        if (demographicDataStorageValue && isUhc == false && msCookie !== 1 && window.getUserType().toLowerCase() == 'imh') {
          var el = document.querySelector('.ss-big-play.sharp-js-demographic-trigger');
          el.style.visibility = 'hidden';
        }
        // document.body.classList.add(AARP?.cookies?.at?.ms === '1' ? 'sharp-c-buy-user'
        //     : 'sharp-c-join-user');
        // document.body.classList.add(`sharp-c-${AARP?.StayingSharp?.getPageName()}`);
        // document.body.classList.remove('sharp-c-hide--ads');
    });

});
