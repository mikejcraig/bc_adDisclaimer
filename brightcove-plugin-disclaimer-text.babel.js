
videojs.registerPlugin('adDisclaimer', function() {
const player = this;

this.on('loadedmetadata', () => {
  this.on('ima3-started', () => {
    alert(this.id());
    const playerId = this.id();
    const playerControlBarContainer = document.querySelectorAll('#' + this.id() + ' .vjs-custom-control-spacer.vjs-spacer')[0];
    
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
  this.on('ima3-complete', () => {
    const hideAdDisclaimer = () => {
      const disclaimerEl = document.getElementsByClassName('ad-disclaimer');
      disclaimerEl.remove();
    };
    hideAdDisclaimer();
  });
});
});
