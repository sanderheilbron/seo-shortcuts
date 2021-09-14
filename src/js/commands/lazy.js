/**
 * lazy.js 1.0
 * Highlight images on the page that are lazy loaded (native lazy loading)
 */

(function () {
    "use strict";

    var styleSheetHeadings = 'img[loading="lazy"]{border: 5px dashed red;}';

    function addStyleSheet(str) {
        var node = document.createElement("style");
        node.innerHTML = str;
        document.body.appendChild(node);
    }

    addStyleSheet(styleSheetHeadings);
})();
