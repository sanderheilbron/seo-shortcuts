/**
 * ose.js 1.0
 * Check current URL in Moz Open Site Explorer
 */

(function() {
  "use strict";
  window.open(
    "https://moz.com/researchtools/ose/links?site=" +
      encodeURIComponent(document.location.href)
  );
})();
