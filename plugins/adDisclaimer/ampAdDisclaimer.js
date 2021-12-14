videojs.registerPlugin('ampAdDisclaimer', function() {
  var player = this;
  player.on('ads-request', function(evt) {
		const disclaimerElement = document.createElement('p');
        disclaimerElement.setAttribute('class', 'ad-disclaimer');
        disclaimerElement.textContent = 'Advertisement';
        const playerControlBarContainer = document.querySelector(`#${player.id()} .vjs-spacer`);
        playerControlBarContainer.appendChild(disclaimerElement);
  })      
});