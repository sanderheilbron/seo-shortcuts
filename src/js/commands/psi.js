/**
 * psi.js 1.0
 * Check current URL in Google PageSpeed Insights
 */

(function() {
    'use strict';

    //Loads options from chrome.storage.sync.
    chrome.storage.sync.get(['interfaceLanguage'], function(settings) {
        if (!chrome.runtime.error) {
            var interfaceLanguage = settings.interfaceLanguage;
        }

        window.open(
            'https://developers.google.com/speed/pagespeed/insights/?url=' +
                encodeURIComponent(document.location.href) +
                '&hl=' +
                interfaceLanguage
        );
    });
})();
