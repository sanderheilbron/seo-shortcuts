/**
 * rrtt.js 1.0
 * Check current URL in Google Rich Results Test Tool
 */

(function() {
    'use strict';
    //Loads options from chrome.storage.sync.
    chrome.storage.sync.get(['interfaceLanguage'], function(settings) {
        if (!chrome.runtime.error) {
            var interfaceLanguage = settings.interfaceLanguage;
        }

        window.open(
            'https://search.google.com/test/rich-results?url=' +
                encodeURIComponent(document.location.href) +
                '&hl=' +
                interfaceLanguage
        );
    });
})();
