/**
 * size.js 1.0
 * Highlight images on the page that do not have width and height attributes
 */

(function () {
    "use strict";

    var styleSheetHeadings =
        "img:not([width][height]){border: 5px dashed purple;}";

    function addStyleSheet(str) {
        var node = document.createElement("style");
        node.innerHTML = str;
        document.body.appendChild(node);
    }

    addStyleSheet(styleSheetHeadings);
})();
