/**
 * rh.js 1.0
 * Shortcut to open current page in Browser Resource Hint Validator.
 */

(function () {
    "use strict";
    window.open(
        "https://www.debugbear.com/resource-hint-validator?url=" +
            encodeURIComponent(document.location.href)
    );
})();
