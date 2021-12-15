videojs.registerPlugin('ampAdDisclaimer', function() {
  var player = this;
  player.on('ads-ad-started', function(evt) {
		var disclaimerElement = document.createElement('p');
        disclaimerElement.setAttribute('class', 'ad-disclaimer');
        disclaimerElement.textContent = 'Advertisement';
        var playerControlBarContainer = document.querySelectorAll('#' + player.id() + '.vjs-spacer')[1];
        playerControlBarContainer.appendChild(disclaimerElement);
  }) 

    player.on('ads-ad-ended', function(evt) {
        var playerControlBarContainer = document.querySelectorAll('#' + player.id() + '.vjs-spacer')[1];
        var playerControlBarText = playerControlBarContainer.querySelector('.ad-disclaimer');

        if (playerControlBarText) {
            playerControlBarText.remove();
        }
  })       
});