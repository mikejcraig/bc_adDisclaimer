videojs.registerPlugin('externalSrc', function() {
  var player = this;
//  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
//  if(playerSource){
 //   player.src(playerSource)
//  }
  player.src("https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4")
});
