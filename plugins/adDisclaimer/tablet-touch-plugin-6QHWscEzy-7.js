"use strict";

videojs.registerPlugin('tabletTouchSkipButton', function () {
  var _this = this;
      var gamesStageSite1 = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
        if (gamesStageSite1) {
    window.document.getElementsByClassName('vjs-big-play-button')[0].classList.add('hide');
  }
  this.on('loadedmetadata', function () {
    var playerId = _this.id();


    var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : true;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var tOutTime = (isFirefox) ? 600 : 600;

    setTimeout(function() {
    if (gamesStageSite) {
    var pwtBid = (typeof PWT === 'object' && typeof PWT.requestBids === 'function' && Object.keys(PWT.bidMap).length > 0);
    var bidvastTag = (pwtBid) ? AARP.ads.refreshAdsBySlot('gamesplayer') : false;
    var bidVasttagLength = (bidvastTag && bidvastTag.split('cust_params=').length == 2) ? bidvastTag.split('cust_params=')[1].length > 0 : false;
    var adplayed = sessionStorage.getItem('bcplaycapAdPlayed');
    var preservisionSponsorship = document.querySelector('#aarpAdUnitCustom');
    var preservisionSponsorshipTest = (preservisionSponsorship && preservisionSponsorship.content) ? preservisionSponsorship.content : false;

    console.log('bidvastTag ' + bidvastTag);
    if (!adplayed && bidVasttagLength && (preservisionSponsorshipTest !== 'gamename=aarp-trivia' || preservisionSponsorshipTest !==  'gamename=preservision-klondike-solitaire'
    || preservisionSponsorshipTest !== 'gamename=quaker-oats-klondike-solitaire')) {
    _this.ima3.settings.serverUrl = bidvastTag;
    console.log('pwt video ready');
    }
    window.document.getElementsByClassName('vjs-big-play-button')[0].classList.remove('hide');

    }
    }, tOutTime);

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
