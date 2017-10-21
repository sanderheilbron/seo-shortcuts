/**
 * whois.js 1.0
 * Check current host in WHOIS Search (Powered by DNSimple)
 */

(function() {
  "use strict";
  window.open(
    "https://dnsimple.com/whois/" +
      encodeURIComponent(location.hostname.split(".").reverse()[1]) +
      "." +
      encodeURIComponent(location.hostname.split(".").reverse()[0])
  );
})();
