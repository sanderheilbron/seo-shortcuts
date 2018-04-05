/**
 * rlp.js 1.0
 * Check current URL in Rich Link Preview (Richpreview.com)
 */

(function() {
  "use strict";
  window.open(
    "https://richpreview.com/?url=" +
      document.location.href
  );
})();
