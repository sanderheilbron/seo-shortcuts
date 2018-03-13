/**
 * gtm.js 1.0
 * Check current (exact) URL in GTmetrix.com
 */

(function() {
  "use strict";
  window.open(
    "https://gtmetrix.com/?url=" +
      encodeURIComponent(document.location.href)
  );
})();