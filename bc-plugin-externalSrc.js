videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : "https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4";
  if(playerSource){
    player.src(playerSource)
  }
player.ima3({
  ima3SdkSettings: {
    "disableCustomPlaybackForIOS10Plus": true
  }
})	
  player.ready(function(){
		var myPlayer = this;
		var playerId = myPlayer.id();
		var playerContainerId = document.getElementById(player.children()[0].id);
		playerContainerId.style.display = "none";
	});
        player.on('ima3-loaded', function() {
   //   alert('start');
      var myplayer = this;
      var playerId = myplayer.id();
      //  alert(playerId);
          console.log(playerId);
                    console.log(document.getElementById(playerId));

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
