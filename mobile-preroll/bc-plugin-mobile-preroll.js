videojs.registerPlugin('mobilePreroll', function() {
  var player = this;

  player.on('loadedmetadata', function() {
//  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
    google.ima.settings.l = true



}); 
});
