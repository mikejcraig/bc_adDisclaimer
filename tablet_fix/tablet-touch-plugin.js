"use strict";

videojs.registerPlugin('tabletTouchSkipButton', function () {
  var _this = this;

  this.on('loadedmetadata', function () {
    var playerId = _this.id();

    _this.on('ima3-started', function () {
        var windowWidthScrn = document.documentElement.clientWidth;

        if (windowWidthScrn > 767 && windowWidthScrn < 1025) {
        console.log('tablet');
        $aarpe('.vjs-control-bar, .vjs-big-play-button').css('display','none');
        $aarpe('.bc-style-JlvJnROgWL-default').remove();
        }

    });

    _this.on('ima3-complete', function () {
      $aarpe('.vjs-big-play-button').css('display','none');
    });
  });
});
