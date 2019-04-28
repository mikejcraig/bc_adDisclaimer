videojs.registerPlugin('adDisclaimer', function() {
  var player = this;
 // var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
 // if(playerSource){
  //  player.src(playerSource)
 // }
  player.on('loadedmetadata', function() {
    player.on('ima3-started', function() {
      function adDisclaimerElement() {
        var disclaimerEl = document.createElement('div');
        disclaimerEl.setAttribute("id", "ad-disclaimer");
        disclaimerEl.innerHTML = "Advertisement";

        return disclaimerEl;
}
      function spacerElement() {
        var spacerEl = document.getElementsByClassName('vjs-spacer')[1];
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
      function hideAdDisclaimer() {
        var disclaimerEl = document.getElementById('ad-disclaimer');
        disclaimerEl.remove();
      }
      hideAdDisclaimer();
             this.pause(); // don't play the video ever
      setTimeout(function(){ 
                this.dispose();
        alert('dispose');
      }, 200);

    });
}); 
});
