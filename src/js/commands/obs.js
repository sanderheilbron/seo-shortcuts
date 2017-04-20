/**
 * obs.js 1.0
 * Check current hostname in Observatory by Mozilla
 */

(function() {
    'use strict';
    window.open('https://observatory.mozilla.org/analyze.html?host=' + encodeURIComponent(document.location.hostname));
})();
