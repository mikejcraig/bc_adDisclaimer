videojs.registerPlugin('mobilePreroll', function() {
  var player = this;
x = this.id_;
y = document.getElementById(x);
y.firstElementChild.setAttribute("playsinline", "");
  player.on('loadedmetadata', function() {

   window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
   // window.google.ima.settings.l = true
});
//         window.google.ima.settings.l = true;
      });
