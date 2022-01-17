videojs.registerPlugin('ampAdDisclaimer', function() {

// videojs.registerPlugin('ampAdDisclaimer', (event) => {
  const variable = this;
  const variableE = event;

  //     this.on('ads-ad-started', () => {
//         const siteLanguage = window?.AARP?.MetaInfo?.pageData?.language;
//         const disclaimerElement = document.createElement('p');
//         disclaimerElement.setAttribute('class', 'ad-disclaimer');
//         disclaimerElement.textContent = (siteLanguage && siteLanguage == 'es') ? 'Publicidad' : 'Advertisement';
//         const playerControlBarContainer = document.querySelectorAll(`#${this.id()} .vjs-spacer`);

//         if (playerControlBarContainer.length > 1) {
//             playerControlBarContainer[1].appendChild(disclaimerElement);
//         }
//     });

//     this.on('ads-ad-ended', () => {
//         const playerControlBarText = document.querySelector('.ad-disclaimer');

//         if (playerControlBarText) {
//             playerControlBarText.remove();
//         }
//     });
});
