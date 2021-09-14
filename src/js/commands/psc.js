/**
 * psc.js 1.0
 * Check current URL in PageSpeed Compare
 */

(function () {
    "use strict";
    window.open(
        "https://pagespeed.compare?url=" +
            encodeURIComponent(document.location.href)
    );
})();
