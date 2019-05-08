videojs.registerPlugin('externalSrc', () => ) {
  const player = this;
  const playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
  if(playerSource){
    player.src(playerSource)
  }
});
