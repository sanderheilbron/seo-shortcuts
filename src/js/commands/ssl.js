/**
 * ssl.js 1.0
 * Check current host in SSL Server Test (Powered by Qualys SSL Labs)
 */

(function() {
    'use strict';
    window.open('https://www.ssllabs.com/ssltest/analyze.html?d=' + encodeURIComponent(document.location.host) + '&hideResults=on');
})();
