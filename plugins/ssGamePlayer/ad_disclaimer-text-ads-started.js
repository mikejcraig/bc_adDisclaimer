"use strict";videojs.registerPlugin("adDisclaimer",function(){var t=this;this.on("loadedmetadata",function(){var e=t.id(),i=document.querySelectorAll("#"+e+" .vjs-spacer")[1];t.on("ads-ad-started",function(){var e,t;e=i,(t=document.createElement("p")).setAttribute("class","ad-disclaimer"),t.innerText="Advertisement",t=t,e.appendChild(t)}),t.on("ads-ad-ended",function(){i.remove()})})});