videojs.registerPlugin('mobilePreroll', function() {
  var player = this;

  player.on('loadedmetadata', function() {
   window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
   // window.google.ima.settings.l = true



}); 
});
