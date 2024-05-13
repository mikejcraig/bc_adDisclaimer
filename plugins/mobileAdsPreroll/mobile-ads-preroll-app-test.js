videojs.registerPlugin('mobileAdsPreroll', function() {
    // Find the player
    const player = document.getElementById(this.id());
    const playerContainer = player.firstElementChild;
    const isMobileViewport = document.documentElement.clientWidth < 1025;
    const iosCustomPlaybackSetting = () => {
    // Disable custom playback for ios
        if (typeof window.google.ima === 'object') {
            window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
            alert('window.google.ima.settings' + window.google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true));
        }
    };

    if (isMobileViewport) {
    // Add the playsinline attribute to video container inside the player
        if (!!playerContainer && playerContainer.nodeName === 'VIDEO') {
            playerContainer.setAttribute('playsinline', '');
            alert('playsinline');
        }

        this.on('loadedmetadata', () => {
            iosCustomPlaybackSetting();
        });

        this.on('ima3-ready', () => {
            iosCustomPlaybackSetting();
        });
    }
});
