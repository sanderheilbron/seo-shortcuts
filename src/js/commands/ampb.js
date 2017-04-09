/**
 * ampb.js 1.0
 * Check current URL in AMPBench
 */

(function() {
  'use strict';
  window.open('https://ampbench.appspot.com/validate?url=' + encodeURIComponent(document.location.href));
})();
