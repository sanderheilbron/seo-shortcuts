/**
 * Sais.js 1.0
 * Save current URL in Archive.is
 */

(function() {
    'use strict';
    window.open(
        'https://archive.is/?run=1&url=' +
            encodeURIComponent(document.location.href)
    );
})();
