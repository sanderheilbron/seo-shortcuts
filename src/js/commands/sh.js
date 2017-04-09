/**
 * sh.js 1.0
 * Check current URL in SecurityHeaders.io
 */

(function() {
  'use strict';
  window.open('https://securityheaders.io/?q=' + encodeURIComponent(document.location.href) + '&hide=on&followRedirects=on');
})();
