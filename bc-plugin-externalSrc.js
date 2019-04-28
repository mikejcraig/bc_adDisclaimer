videojs.registerPlugin('externalSrc', function() {
  var player = this;
//  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
//  if(playerSource){
 //   player.src(playerSource)
//  }
  player.on('play', function() {
//      player.src("https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4")
    
    alert('started')
    this.pause();
    this.dispose();

});
  player.on('ended', function() {
    alert('ended');

  this.dispose();
});  
});
