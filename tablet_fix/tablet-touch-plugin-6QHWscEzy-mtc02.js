"use strict";

videojs.registerPlugin('tabletTouchSkipButton', function () {
  var _this = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : false;
  if (gamesStageSite) {
  window.document.getElementsByClassName('vjs-big-play-button')[0]?.classList.add('hide');

  this.on('loadedmetadata', async function () {
    var adplayed = sessionStorage.getItem('bcplaycapAdPlayed');

    var bidvastTag = await window.cmdjs?.requestVideoBidsAsync({
      key: 'vjs_video_3_html5_api',
      adUnitPath: '/1175/aarpe-eng/games',
      playerSize: [640, 480],
      targeting: [['mtc_video', 'true']],
    });

    if (!adplayed && bidvastTag) {
      console.log('bidvastTag', bidvastTag);
      if (bidvastTag?.indexOf('hb') > -1) {
        console.log('MTC Bid True');
      }
      if (_this.ima3?.settings) {
        _this.ima3.settings.serverUrl = bidvastTag;
      }
    }

    window.document.getElementsByClassName('vjs-big-play-button')[0]?.classList.remove('hide');

  });
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = '(' + function() {
        var observer = new MutationObserver(function(mutations) {
            for (var i = 0; i < mutations.length; i++) {
                for (var j = 0; j < mutations[i].addedNodes.length; j++) {
                    var node = mutations[i].addedNodes[j];
                    if (node.id === 'ad-mobile-gameplay' || (node.querySelector && node.querySelector('#ad-mobile-gameplay'))) {
                        observer.disconnect();
                        googletag.cmd.push(function() {
                            var slot = googletag.pubads().getSlots().find(function(s) {
                                return s.getSlotElementId() === 'ad-mobile-gameplay';
                            });
                            if (slot) googletag.pubads().refresh([slot]);
                        });
                        return;
                    }
                }
            }
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
    } + ')();';
    document.head.appendChild(script);
  }
});
