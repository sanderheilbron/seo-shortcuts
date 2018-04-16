/**
 * ah.js 1.0
 * Check current (exact) URL in Ahrefs Site Explorer
 */

(function() {
    'use strict';
    window.open(
        'https://ahrefs.com/site-explorer/overview/v2/prefix/fresh?target=' +
            encodeURIComponent(document.location.href)
    );
})();
