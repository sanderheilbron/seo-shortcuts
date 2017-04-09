/**
 * ampt.js 1.0
 * Check current URL in Google Search Console AMP Test
 */

(function() {
  'use strict';
  //Loads options from chrome.storage.sync.
  chrome.storage.sync.get(["interfaceLanguage"], function(settings) {
    if (!chrome.runtime.error) {
      var interfaceLanguage = settings.interfaceLanguage;
    }

  window.open('https://search.google.com/search-console/amp?url=' + encodeURIComponent(document.location.href) + '&hl=' + interfaceLanguage);
  });
})();
