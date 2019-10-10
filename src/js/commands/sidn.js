/**
 * sidn.js 1.0
 * Check current (exact) URL in SIDN.nl Whois
 */

(function() {
    'use strict';
    window.open(
        'https://www.sidn.nl/whois/?q=' +
            encodeURIComponent(document.location.href)
    );
})();
