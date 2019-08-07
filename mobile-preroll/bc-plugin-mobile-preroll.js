videojs.registerPlugin('mobilePreroll', function() {
  var player = this;
  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);

  player.on('loadedmetadata', function() {
  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);

}); 
});
