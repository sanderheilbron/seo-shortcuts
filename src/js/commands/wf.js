/**
 * wf.js 1.0
 * Check current URL in Waterfaller
 */

https: (function () {
    "use strict";
    window.open(
        "https://waterfaller.dev/?url=" +
            encodeURIComponent(document.location.href)
    );
})();
