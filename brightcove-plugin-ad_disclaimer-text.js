"use strict";

videojs.registerPlugin('adDisclaimer', function () {
  var _this = this;

  this.on('loadedmetadata', function () {
    var playerId = _this.id();

    var playerControlBarContainer = document.querySelectorAll('#' + playerId + ' .vjs-spacer')[1];

    _this.on('ima3-started', function () {
        var windowWidthScrn = document.documentElement.clientWidth;
      alert(windowWidthScrn);
      alert(windowWidthScrn > 767 && windowWidthScrn < 1025);
        if (windowWidthScrn > 767 && windowWidthScrn < 1025) {
                alert('windowWidthScrn true');

          console.log('tablet');
        $aarpe('.vjs-control-bar, .vjs-big-play-button').css('display','none');

   //   $aarpe('.vjs-big-play-button').hide();
        $aarpe('.bc-style-JlvJnROgWL-default').remove();
        }

      var adDisclaimerElement = function adDisclaimerElement() {
        var disclaimerEl = document.createElement('p');
        disclaimerEl.setAttribute('class', 'ad-disclaimer');
        disclaimerEl.innerText = 'Advertisement';
        return disclaimerEl;
      };

      var appendAdDisclaimer = function appendAdDisclaimer(spacerEl, disclaimerEl) {
        spacerEl.appendChild(disclaimerEl);
      };

      var showAdDisclaimer = function showAdDisclaimer() {
        appendAdDisclaimer(playerControlBarContainer, adDisclaimerElement());
      };

      showAdDisclaimer();
    });

    _this.on('ima3-complete', function () {
      var hideAdDisclaimer = function hideAdDisclaimer() {
        playerControlBarContainer.remove();
      };
      $aarpe('.vjs-big-play-button').css('display','none');

      hideAdDisclaimer();
    });
  });
});
