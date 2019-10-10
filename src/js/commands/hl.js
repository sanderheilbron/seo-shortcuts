/**
 * hl.js 1.0
 * Check hreflang annotations for current URL in hreflang.ninja
 * hreflang.ninja allows you to easily check whether your rel-alternate-hreflang annotations on a page are correct.
 */

(function() {
    'use strict';
    window.open(
        'http://hreflang.ninja/check/?url=' +
            encodeURIComponent(document.location.href)
    );
})();
