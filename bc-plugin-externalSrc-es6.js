videojs.registerPlugin('externalSrc', () => {
  const player = this;
  if(!!player.tagAttributes.src){
  	console.log(player.tagAttributes.src);
  }
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : "https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4";
  if(playerSource){
    player.src(playerSource)
  }
});
