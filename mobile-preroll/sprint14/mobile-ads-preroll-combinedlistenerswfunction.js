"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

videojs.registerPlugin('mobileAdsPreroll', function () {
  // Find the player
  var player = document.getElementById(this.id());
  var playerContainer = player.firstElementChild;
  var isMobileViewport = document.documentElement.clientWidth < 768;

  var resetTouchEvent = function resetTouchEvent() {
    player.classList.add('not-hover');
  };

  if (isMobileViewport) {
    // Add the playsinline attribute to video container inside the player
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
      // Disable custom playback for ios
      if (_typeof(window.google.ima) === 'object') {
        window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
      }
    }); // Reset hover after mobile touch events

    this.on('ads-ad-skipped', function () {
      resetTouchEvent();
    });
    this.on('ads-ad-ended', function () {
      resetTouchEvent();
    });
  }
});