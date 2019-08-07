videojs.registerPlugin('mobilePreroll', function() {
  var player = this;
player.ima3({
  ima3SdkSettings: {
    "disableCustomPlaybackForIOS10Plus": true
  }
});
  player.on('loadedmetadata', function() {
   window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
   // window.google.ima.settings.l = true



}); 
});
