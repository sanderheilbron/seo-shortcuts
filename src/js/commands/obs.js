/**
 * obs.js 1.1
 * Check current hostname in Observatory by Mozilla
 */

(function () {
    "use strict";
    window.open(
        "https://observatory.mozilla.org/analyze/" +
            encodeURIComponent(document.location.hostname)
    );
})();
