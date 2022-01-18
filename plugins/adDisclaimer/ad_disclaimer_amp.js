videojs.registerPlugin('ampAdDisclaimer', function() {
    this.on('ads-ad-started', () => {
        const siteLanguage = window?.AARP?.MetaInfo?.pageData?.language;
        const playerControlBarContainer = document.querySelectorAll(`#${this.id()} .vjs-spacer`);
        const disclaimerElement = document.createElement('p');
        disclaimerElement.setAttribute('class', 'ad-disclaimer');
        disclaimerElement.textContent = (siteLanguage && siteLanguage == 'es') ? 'Publicidad' : 'Advertisement';

        if (playerControlBarContainer.length > 1) {
            playerControlBarContainer[1].appendChild(disclaimerElement);
        }
    });

    this.on('ads-ad-ended', () => {
        const playerControlBarText = document.querySelector(`#${this.id()} .ad-disclaimer`);

        if (playerControlBarText) {
            playerControlBarText.remove();
        }
    });
});
