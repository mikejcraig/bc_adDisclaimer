videojs.registerPlugin('adDisclaimer', function() {
  this.on('loadedmetadata', () => {
    const playerId = this.id();
    const playerControlBarContainer = document.querySelectorAll('#' + playerId + ' .vjs-spacer')[1];

    this.on('ima3-started', () => {
      const adDisclaimerElement = () => {
        const disclaimerEl = document.createElement('p');
        disclaimerEl.setAttribute('class', 'ad-disclaimer');
        disclaimerEl.innerText = 'Publicidad';
        return disclaimerEl;
      };
      const appendAdDisclaimer = (spacerEl, disclaimerEl) => {
        spacerEl.appendChild(disclaimerEl);
      };
      const showAdDisclaimer = () => {
        appendAdDisclaimer(playerControlBarContainer, adDisclaimerElement());
      };
      showAdDisclaimer();
    });
    this.on('ima3-complete', () => {
      const hideAdDisclaimer = () => {
        playerControlBarContainer.remove();
      };
      hideAdDisclaimer();
    });
  });
});
