videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : "https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4";
  if(playerSource){
    player.src(playerSource)
  }
  player.ready(function(){
    var myPlayer = this;
    var playerId = myPlayer.id();
    var playerContainerId = document.getElementById(player.children()[0].id);
    playerContainerId.style.display = "none";

  });
        player.on('ima3-loaded', function() {
      var myplayer = this;
      var playerId = myplayer.id();
          console.log(playerId);
                    console.log(document.getElementById(playerId));

      document.getElementById(playerId).style.minHeight = "360px";
      });

});
