videojs.registerPlugin('adDisclaimer', function() {
  var player = this;
  player.on('loadedmetadata', function() {
    player.on('ima3-started', function() {
    alert('start');
      function adDisclaimerElement() {
        var disclaimerEl = document.createElement('p');
        disclaimerEl.setAttribute("id", "ad-disclaimer");
        disclaimerEl.innerHTML = "Advertisement";
            alert(disclaimerEl);

        return disclaimerEl;
}
      function appendAdDisclaimer(spacerEl, disclaimerEl) {
        spacerEl.appendChild(disclaimerEl);
      }
      function showAdDisclaimer() {
        appendAdDisclaimer(adDisclaimerElement());
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
