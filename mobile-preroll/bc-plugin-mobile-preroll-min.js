// videojs.registerPlugin('mobilePreroll', function() {
//   var player = this;
// x = this.id_;
// y = document.getElementById(x);
// y.firstElementChild.setAttribute("playsinline", "");
  
//   player.on('loadedmetadata', function() {
// if(typeof window.google.ima == "object"){
//    window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
// }
// });
//       });


"use strict";

var _this = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

videojs.registerPlugin('mobileAdsPreroll', function () {
  var x = _this.id_;
  var y = document.getElementById(x);
  y.firstElementChild.setAttribute('playsinline', '');

  _this.on('loadedmetadata', function () {
    if (_typeof(window.google.ima) == 'object') {
      window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
    }
  });
});
