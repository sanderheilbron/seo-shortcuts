/**
 * gc.js 1.0
 * Check current URL in Google cache
 */

(function() {
  "use strict";

  //Loads options from chrome.storage.sync.
  chrome.storage.sync.get(["interfaceLanguage"], function(settings) {
    if (!chrome.runtime.error) {
      var interfaceLanguage = settings.interfaceLanguage;
    }

    window.open(
      "http://www.google.com/search?q=cache:" +
        encodeURIComponent(document.location.href) +
        "&hl=" +
        interfaceLanguage
    );
  });
})();
