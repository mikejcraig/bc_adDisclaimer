videojs.registerPlugin('mobilePreroll', function() {
  var player = this;
x = this.id_;
y = document.getElementById(x);
y.setAttribute("playsinline", "");
  player.on('loadedmetadata', function() {

   window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
   // window.google.ima.settings.l = true



}); 
      player.on('ima3-ready', function () {
//     player.ima3({
//   ima3SdkSettings: {
//     "disableCustomPlaybackForIOS10Plus": true
//   }
// })
        window.google.ima.settings.l = true;
      });});
