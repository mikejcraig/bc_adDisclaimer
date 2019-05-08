videojs.registerPlugin('externalSrc', () => ) {
  const player = this;
  console.log(player.tagAttributes.src);
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : "https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4";
  if(playerSource){
    player.src(playerSource)
  }
});
