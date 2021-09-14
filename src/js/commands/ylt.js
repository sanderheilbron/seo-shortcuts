/**
 * ylt.js 1.0
 * Check current URL in Yellow Lab Tools
 */

(function () {
    "use strict";

    //Loads options from chrome.storage.sync.
    chrome.storage.sync.get(["autoRun"], function (settings) {
        if (!chrome.runtime.error) {
            var autoRun = settings.autoRun;
        }

        window.open(
            "https://yellowlab.tools?url=" +
                encodeURIComponent(document.location.href) +
                "&run=" +
                autoRun
        );
    });
})();
