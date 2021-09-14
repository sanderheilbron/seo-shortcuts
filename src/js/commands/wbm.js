/**
 * wbm.js 1.0
 * Check current URL in Wayback Machine
 */

(function () {
    "use strict";
    window.open("https://web.archive.org/web/*/" + document.location.href);
})();
