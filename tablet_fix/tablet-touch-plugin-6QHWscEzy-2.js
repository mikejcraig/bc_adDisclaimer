"use strict";

videojs.registerPlugin('tabletTouchSkipButton', function () {
  var _this = this;
      var gamesStageSite1 = (window.location.host == 'arenax-testing-games.aarp.org') ? true : false;
        if (gamesStageSite1) {
    window.document.getElementsByClassName('vjs-big-play-button')[0].classList.add('hide');
  }
  this.on('loadedmetadata', function () {
    var playerId = _this.id();


    var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : false;

    setTimeout(function() {
    if (gamesStageSite) {

    var bidvastTag = AARP.ads.refreshAdsBySlot('gamesplayer');
    var bidVasttagLength = (bidvastTag && bidvastTag.split('cust_params=').length == 2) ? bidvastTag.split('cust_params=')[1].length > 0 : false;
    var adplayed = sessionStorage.getItem('bcplaycapAdPlayed');
                              console.log('bidvastTag ' + bidvastTag);

    if (!adplayed && bidVasttagLength) {
    _this.ima3.settings.serverUrl = bidvastTag; 
    console.log('pwt video ready');
    }
    window.document.getElementsByClassName('vjs-big-play-button')[0].classList.remove('hide');

    }
    }, 250);

    _this.on('ima3-started', function () {
        var windowWidthScrn = document.documentElement.clientWidth;

        if (windowWidthScrn > 767 && windowWidthScrn < 1025) {
        console.log('tablet');
        $aarpe('.vjs-control-bar, .vjs-big-play-button').css('display','none');
//         $aarpe('.bc-style-6QHWscEzy-default').remove();
        }

    });

    _this.on('ima3-complete', function () {
      $aarpe('.vjs-big-play-button').css('display','none');
    });
  });
});
