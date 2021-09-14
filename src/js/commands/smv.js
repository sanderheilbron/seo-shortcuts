/**
 * smv.js 1.0
 * Check current URL in Schema Markup Validator
 */

(function () {
    "use strict";
    //Loads options from chrome.storage.sync.
    chrome.storage.sync.get(["interfaceLanguage"], function (settings) {
        if (!chrome.runtime.error) {
            var interfaceLanguage = settings.interfaceLanguage;
        }

        window.open(
            "https://validator.schema.org/?url=" +
                encodeURIComponent(document.location.href) +
                "&hl=" +
                interfaceLanguage
        );
    });
})();
