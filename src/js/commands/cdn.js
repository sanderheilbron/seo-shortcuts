/**
 * cdn.js 1.0
 * Look up the names of all CDNs used on a web page.
 */

(function() {
  "use strict";
  window.open(
    "https://www.cdnplanet.com/tools/cdnfinder/#site:" + document.location.href
  );
})();
