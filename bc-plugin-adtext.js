videojs.registerPlugin('adDisclaimer', function() {
  var player = this;
  player.on('loadedmetadata', function() {
    player.on('ima3-started', function() {
    alert('start');
      function adDisclaimerElement() {
        var disclaimerEl = document.createElement('div');
        disclaimerEl.setAttribute("id", "ad-disclaimer");
        disclaimerEl.innerHTML = "Advertisement";
            alert(disclaimerEl);

        return disclaimerEl;
}
      function spacerElement() {
        var spacerEl = document.getElementsByClassName('vjs-spacer')[1];
        spacerEl.setAttribute(
'style',
          'justify-content: center; margin-top: 10px; font-size:2em;'
        );    

        alert(spacerEl);

        return spacerEl;
      }
      function appendAdDisclaimer(spacerEl, disclaimerEl) {
        spacerEl.appendChild(disclaimerEl);
      }
      function showAdDisclaimer() {
        appendAdDisclaimer(spacerElement(), adDisclaimerElement());
      }
      showAdDisclaimer();
    });
    player.on('ima3-complete', function() {
              alert('complete');
      function hideAdDisclaimer() {
        var disclaimerEl = document.getElementById('ad-disclaimer');
        disclaimerEl.remove();
      }
      hideAdDisclaimer();
    });
}); 
});