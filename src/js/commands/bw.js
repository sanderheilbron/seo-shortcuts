/**
 * bw.js 1.0
 * Shortcut to open current page in BuiltWith.
 */

(function () {
    'use strict';
    window.open(
        'https://builtwith.com/?' +
        document.location.href
    );
})();