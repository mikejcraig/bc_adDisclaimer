videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : "https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4";
  if(playerSource){
    player.src(playerSource)
  }
        player.on('ima3-started', function() {
   //   alert('start');
      var myplayer = this;
      var playerId = myplayer.id();
        alert(playerId);
      document.getElementById(playerId).style.minHeight = "360px";
      });
  player.on('playing', function() {    
 //   alert('started')
 //   this.pause();
 //   this.dispose();

});
  player.on('ended', function() {
 //   alert('ended');

//  this.dispose();
});

});
