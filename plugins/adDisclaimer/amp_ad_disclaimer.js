"use strict";var _this=void 0;videojs.registerPlugin("ampAdDisclaimer",function(){var d=document.getElementById(_this.id());d.on("ads-ad-started",function(){var e=document.createElement("p");e.setAttribute("class","ad-disclaimer"),e.textContent="Advertisement";var t=document.querySelectorAll("#".concat(d.id()," .vjs-spacer"));1<t.length&&t.appendChild(e[1])}),d.on("ads-ad-ended",function(){var e=document.querySelector(".ad-disclaimer");e&&e.remove()})});