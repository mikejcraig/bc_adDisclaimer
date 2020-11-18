videojs.registerPlugin('externalSrc', function() {
  var player = this;
  var gamesStageSite = (window.location.host == 'arenax-testing-games.aarp.org') ? true : false;
  var gameTarget = (window.document.getElementById('aarpAdUnitCustom').content == "gamename=candy-mahjongg") ? true : false;
  var setFrequencyCap = function() {
 //  	var now = new Date();
	// var time = now.getTime();
	// time += 300 * 1000;
	// now.setTime(time);
	// window.document.cookie = 'bcplaycap=' + 'true' + '; expires=' + now.toUTCString() + '; path=/';
	sessionStorage.setItem('aarpplaycap', 'true');
  }
  // var cookieValue = window.document.cookie.split('; ').find(row => row.startsWith('bcplaycap'));
  if(gamesStageSite && gameTarget){
	  if(sessionStorage.getItem('aarpplaycap')) {
	  	this.dispose();
	  } else {
	  	setFrequencyCap();
	  }
  }
  var playerSource = (player.tagAttributes.src) ? player.tagAttributes.src : false;
  if(playerSource){
    console.log('playerSource' + playerSource);
    player.src(playerSource);
  }
});
