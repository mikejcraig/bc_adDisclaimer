"use strict";

videojs.registerPlugin('adDisclaimer', function () {
  var _this = this;

  this.on('loadedmetadata', function () {
    _this.on('ima3-started', function () {
      alert(_this.id());

      var adDisclaimerElement = function adDisclaimerElement() {
        var disclaimerEl = document.createElement('p');
        disclaimerEl.setAttribute('class', 'ad-disclaimer');
        disclaimerEl.innerText = 'Advertisement';
        return disclaimerEl;
      };

      var spacerElement = function spacerElement() {
        var spacerEl = document.getElementsByClassName('vjs-spacer')[1]; // const spacerElParent = this.player().controlBar.customControlSpacer.id();
        // const spacerEl = document.getElementById(spacerElParent);

        return spacerEl;
      };

      var appendAdDisclaimer = function appendAdDisclaimer(spacerEl, disclaimerEl) {
        spacerEl.appendChild(disclaimerEl);
      };

      var showAdDisclaimer = function showAdDisclaimer() {
        appendAdDisclaimer(spacerElement(), adDisclaimerElement());
      };

      showAdDisclaimer();
    });

    _this.on('ima3-complete', function () {
      var hideAdDisclaimer = function hideAdDisclaimer() {
        var disclaimerEl = document.getElementsByClassName('ad-disclaimer');
        disclaimerEl.remove();
      };

      hideAdDisclaimer();
    });
  });
});