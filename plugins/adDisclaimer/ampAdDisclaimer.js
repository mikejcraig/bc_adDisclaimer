videojs.registerPlugin('ampAdDisclaimer', function() {
  var player = this;
  player.on('ads-ad-started', function(evt) {
		const disclaimerElement = document.createElement('p');
        disclaimerElement.setAttribute('class', 'ad-disclaimer');
        disclaimerElement.textContent = 'Advertisement';
        const playerControlBarContainer = document.querySelectorAll(`#${player.id()} .vjs-spacer`)[1];
        playerControlBarContainer.appendChild(disclaimerElement);
  })      
});