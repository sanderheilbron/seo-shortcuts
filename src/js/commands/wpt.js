/**
 * wpt.js 1.0
 * Check current URL in WebPageTest.org
 */

(function() {
  'use strict';
  window.open('http://www.webpagetest.org/?url=' + encodeURIComponent(document.location.href));
})();
