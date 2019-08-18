videojs.registerPlugin('mobilePreroll', function() {
  var player = this;
x = this.id_;
y = document.getElementById(x);
y.firstElementChild.setAttribute("playsinline", "");
  
  player.on('loadedmetadata', function() {
if(typeof window.google.ima == "object"){
   window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
}
});
      });
