videojs.registerPlugin('ampAdDisclaimer', function() {
  var player = this;
  player.on('ads-request', function(evt) {
    console.log('ads-request ' + evt);
        const playerControlBarContainer = document.querySelector(`#${player.id()} .vjs-spacer`);
        playerControlBarContainer.textContent = 'Advertisement';
  })      
});