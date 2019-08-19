videojs.registerPlugin('mobileAdsPreroll', function() {
  // Find the player
  const player = document.getElementById(this.id());
  const playerContainer = player.firstElementChild;

  // Add the playsinline attribute to video container inside the player
  if(!!playerContainer && playerContainer.nodeName === 'VIDEO'){
    playerContainer.setAttribute('playsinline', '');
  }
  
  this.on('loadedmetadata', () => {
    // Disable custom playback for ios
    if (typeof window.google.ima === 'object') {
      window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
    }
  });
});
