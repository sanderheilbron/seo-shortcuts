/**
 * hsts.js 1.0
 * Check current domain for HSTS Preload List Submission
 */

(function() {
    'use strict';
    var arr = document.location.hostname.split('.'),
        url;

    if (typeof arr[2] === 'undefined') {
        url = arr[0] + '.' + arr[1];
    } else {
        url = arr[1] + '.' + arr[2];
    }

    window.open('https://hstspreload.org/?domain=' + encodeURIComponent(url));
})();
