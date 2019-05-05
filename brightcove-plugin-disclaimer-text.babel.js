videojs.registerPlugin('adDisclaimer', function() {

// const player = this;

this.on('loadedmetadata', () => {
  this.on('ima3-started', () => {
    alert(this.id);
    showAdDisclaimer();
    const showAdDisclaimer = () => {
      appendAdDisclaimer(spacerElement(), adDisclaimerElement());
    }
    const adDisclaimerElement = () => {
      const disclaimerEl = document.createElement('h3');
      disclaimerEl.setAttribute("class", "ad-disclaimer");
      disclaimerEl.innerText = "Advertisement";
      return disclaimerEl;
    }
    const spacerElement = () => {
      const spacerEl = document.getElementsByClassName('vjs-spacer')[1];
      return spacerEl;
    }
    const appendAdDisclaimer = (spacerEl, disclaimerEl) => {
      spacerEl.appendChild(disclaimerEl);
    }
  });
  this.on('ima3-complete', () => {
    const hideAdDisclaimer = () => {
      const disclaimerEl = document.getElementsByClassName('ad-disclaimer');
      disclaimerEl.remove();
    }
    hideAdDisclaimer();
  });
});
});
