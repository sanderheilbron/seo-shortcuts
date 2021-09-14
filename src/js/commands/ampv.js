/**
 * ampv.js 1.0
 * Check current URL in Google AMP Validator
 */

(function () {
    "use strict";
    window.open(
        "https://validator.ampproject.org/#url=" +
            encodeURIComponent(document.location.href)
    );
})();
