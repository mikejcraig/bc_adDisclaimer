videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
  if(playerSource){
    player.src(playerSource)
  }
});