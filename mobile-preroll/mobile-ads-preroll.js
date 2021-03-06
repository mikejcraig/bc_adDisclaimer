"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

videojs.registerPlugin('mobileAdsPreroll', function () {
  // Find the player
  var player = document.getElementById(this.id());
  var playerContainer = player.firstElementChild; // Add the playsinline attribute to video container inside the player

  if (!!playerContainer && playerContainer.nodeName === 'VIDEO') {
    playerContainer.setAttribute('playsinline', '');
  }
  
  this.on('loadedmetadata', function () {
    // Disable custom playback for ios
    if (_typeof(window.google.ima) === 'object') {
      window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
    }
  });
  this.on('ima3-ready', function () {
    var windowWidthScrn = document.documentElement.clientWidth;
    if (windowWidthScrn < 768) {
      window.google.ima.settings.l = true;
    }
  });
});
