/**
 * mj.js 1.0
 * Check current URL in Majestic Backlink Checker
 */

(function() {
  'use strict';
  window.open('https://majestic.com/reports/site-explorer?q=' + encodeURIComponent(document.location.href));
})();
