/**
 * tls.js 1.0
 * Check current hostname in TLS checker
 */

https: (function () {
    "use strict";
    window.open(
        "https://www.cdn77.com/tls-test/result?domain=" +
            encodeURIComponent(document.location.hostname)
    );
})();
