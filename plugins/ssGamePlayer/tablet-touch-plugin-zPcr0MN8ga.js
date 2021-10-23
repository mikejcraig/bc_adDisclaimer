"use strict";

videojs.registerPlugin('tabletTouchSkipButton', function () {
  var _this = this;

  this.on('loadedmetadata', function () {
    var playerId = _this.id();

    _this.on('ima3-started', function () {
        var windowWidthScrn = document.documentElement.clientWidth;

        if (windowWidthScrn > 767 && windowWidthScrn < 1025) {
        console.log('tablet');
        // $aarpe('.vjs-control-bar, .vjs-big-play-button').css('display','none');
        var playerControlsHide = document.querySelectorAll('.bc-player-zPcr0MN8ga_default .vjs-control-bar, .bc-player-zPcr0MN8ga_default .vjs-big-play-button');
        Array.prototype.slice.call(playerControlsHide).map(value => value.style.display = 'none');
//         $aarpe('.bc-style-6QHWscEzy-default').remove();
        }

    });

    _this.on('ima3-complete', function () {
      // $aarpe('.vjs-big-play-button').css('display','none');
        var playerControlHide = document.querySelectorAll('.bc-player-zPcr0MN8ga_default .vjs-big-play-button');
        Array.prototype.slice.call(playerControlHide).map(value => value.style.display = 'none');
    });
  });
});
