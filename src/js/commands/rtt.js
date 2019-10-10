/**
 * rtt.js 1.0
 * Check current URL in Robots.txt Test Tool (OnPage.org)
 */

(function() {
    'use strict';
    window.open(
        'https://en.onpage.org/free-tools/robots-txt/?url=' +
            document.location.href +
            '&useragent=Googlebot'
    );
})();
