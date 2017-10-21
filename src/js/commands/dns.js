/**
 * dns.js 1.0
 * Check current hostname in Google DNS service
 */

(function() {
  "use strict";
  window.open(
    "https://dns.google.com/query?name=" +
      encodeURIComponent(document.location.hostname)
  );
})();
