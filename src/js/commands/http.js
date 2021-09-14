/**
 * http.js 1.0
 * Check current URL in httpstatus.io
 */

(function () {
    "use strict";
    window.open(
        "https://httpstatus.io?url=" +
            encodeURIComponent(document.location.href)
    );
})();
