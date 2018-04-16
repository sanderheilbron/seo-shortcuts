/**
 * gs.js 1.0
 * Check current URL in Google Search index
 */

(function() {
    'use strict';

    //Loads options from chrome.storage.sync.
    chrome.storage.sync.get(['countryVersion', 'interfaceLanguage'], function(
        settings
    ) {
        if (!chrome.runtime.error) {
            var countryVersion = settings.countryVersion;
            var interfaceLanguage = settings.interfaceLanguage;
        }

        window.open(
            'https://www.google.' +
                countryVersion +
                '/search?q=site:' +
                encodeURIComponent(document.location.href) +
                '&hl=' +
                interfaceLanguage
        );
    });
})();
