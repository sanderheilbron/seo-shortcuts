/**
 * treo.js 1.0
 * Check current hostname in Treo.sh
 */

(function () {
    "use strict";
    window.open(
        `https://treo.sh/sitespeed/${encodeURIComponent(
            document.location.hostname
        )}?formFactor=phone&metrics=ttfb%2Cfcp%2Clcp%2Col%2Cfid%2Ccls`
    );
})();
