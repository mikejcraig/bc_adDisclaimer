videojs.registerPlugin('ampAdDisclaimer', function() {
  var player = this;
  player.on('ads-request', function(evt) {
		const disclaimerElement = document.createElement('p');
        disclaimerEl.setAttribute('class', 'ad-disclaimer');
        disclaimerEl.textContent = 'Advertisement';
        const playerControlBarContainer = document.querySelector(`#${player.id()} .vjs-spacer`);
        playerControlBarContainer.appendChild(disclaimerElement);
  })      
});