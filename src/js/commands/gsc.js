/**
 * gsc.js 1.0
 * Check current origin in Google Search Console
 */

(function() {
    'use strict';

    //Loads options from chrome.storage.sync.
    chrome.storage.sync.get(['interfaceLanguage'], function(settings) {
        if (!chrome.runtime.error) {
            var interfaceLanguage = settings.interfaceLanguage;
        }

        window.open(
            'https://www.google.com/webmasters/tools/dashboard?siteUrl=' +
                encodeURIComponent(document.location.origin) +
                '&hl=' +
                interfaceLanguage
        );
    });
})();
