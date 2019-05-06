videojs.registerPlugin('adDisclaimer', function() {

const player = this;

player.on('loadedmetadata', () => {
  player.on('ima3-started', () => {
    alert(player.id());
    const playerId = player.id();
    const playerControlBarContainer = document.querySelectorAll('#' + playerId + ' .vjs-spacer')[1];

    const adDisclaimerElement = () => {
      const disclaimerEl = document.createElement('p');
      disclaimerEl.setAttribute('class', 'ad-disclaimer');
      disclaimerEl.innerText = 'Advertisement';
      return disclaimerEl;
    };
    const spacerElement = () => {
      const spacerEl = playerControlBarContainer;
      // const spacerElParent = this.player().controlBar.customControlSpacer.id();
      // const spacerEl = document.getElementById(spacerElParent);
      return spacerEl;
    };
    const appendAdDisclaimer = (spacerEl, disclaimerEl) => {
      spacerEl.appendChild(disclaimerEl);
    };
    const showAdDisclaimer = () => {
      appendAdDisclaimer(spacerElement(), adDisclaimerElement());
    };
    showAdDisclaimer();
  });
  player.on('ima3-complete', () => {
    const hideAdDisclaimer = () => {
      const disclaimerEl = document.getElementsByClassName('ad-disclaimer');
      disclaimerEl.remove();
    };
    hideAdDisclaimer();
  });
});
});
