videojs.registerPlugin('adDisclaimer', function() {
  // this.on('loadedmetadata', () => {
    // const playerId = this.id();
    const playerControlBarContainer = document.querySelectorAll('.vjs-spacer')[1];

    // this.on('ima3-started', () => {
      var adDisclaimerElement = function() {
        const disclaimerEl = document.createElement('p');
        disclaimerEl.setAttribute('class', 'ad-disclaimer');
        disclaimerEl.innerText = 'Advertisement';
        return disclaimerEl;
      };
      var appendAdDisclaimer = function(spacerEl, disclaimerEl) {
        spacerEl.appendChild(disclaimerEl);
      };
      var showAdDisclaimer = function() {
        appendAdDisclaimer(playerControlBarContainer, adDisclaimerElement());
      };
      showAdDisclaimer();
    // });
    // this.on('ima3-complete', () => {
    //   const hideAdDisclaimer = () => {
    //     playerControlBarContainer.remove();
    //   };
    //   hideAdDisclaimer();
    // });
  // });
});
