/**
 * dnsz.js 1.0
 * Check DNS zones of current host in Zone Vision (Powered by DNSimple)
 */

(function () {
    "use strict";
    window.open(
        "https://zone.vision/#/" + encodeURIComponent(document.location.host)
    );
})();
