videojs.registerPlugin('adDisclaimer', function() {
  var player = this;
 // var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
 // if(playerSource){
  //  player.src(playerSource)
 // }
//  player.src("https://arenax-blobstorage.cdn.arkadiumhosted.com/arenax-index/_arena-shared-content_/tiny3.mp4");
  
  player.on('loadedmetadata', function() {
    player.on('ima3-started', function() {
   //   alert('start');
      var player = this;
      var playerId = player.id();
      document.getElementById(playerId).style.minHeight = "360px";
      
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
  //           this.pause(); // don't play the video ever
   //   setTimeout(function(){ 
   //             this.dispose();
    //    alert('dispose');
     // }, 200);
//      alert('end');
//alert(this);
    });
}); 
});
