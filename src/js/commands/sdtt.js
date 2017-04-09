/**
 * sdtt.js 1.0
 * Check current URL in Google Structured Data Testing Tool
 */

(function() {
  'use strict';
  //Loads options from chrome.storage.sync.
  chrome.storage.sync.get(["interfaceLanguage"], function(settings) {
    if (!chrome.runtime.error) {
      var interfaceLanguage = settings.interfaceLanguage;
    }

    window.open('https://developers.google.com/structured-data/testing-tool/?url=' + encodeURIComponent(document.location.href) + '&hl=' + interfaceLanguage);
  });
})();
