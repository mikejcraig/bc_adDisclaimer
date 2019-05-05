videojs.registerPlugin('adDisclaimer', function() {

this.on('loadedmetadata', () => {
  this.on('ima3-started', () => {
    alert(this.id());
    const adDisclaimerElement = () => {
      const disclaimerEl = document.createElement('h3');
      disclaimerEl.setAttribute('class', 'ad-disclaimer');
      disclaimerEl.innerText = 'Advertisement';
      return disclaimerEl;
    };
    const spacerElement = () => {
      const spacerEl = document.getElementsByClassName('vjs-spacer')[1];
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
