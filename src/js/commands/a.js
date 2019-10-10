/**
 * a.js 1.0
 * Show visual annotations of all anchors
 */

(function() {
    'use strict';

    var styleSheetAnchors =
        'a{text-shadow:none !important;background-color:#fff !important;text-indent:0 !important;background-image:none !important;}a{color:green !important;font-weight:bold !important;outline:1px solid green !important;text-decoration:underline !important;}a[rel~=nofollow]{background-color:pink !important;color:black !important;outline:1px solid pink !important;}a[rel~=nofollow] img{outline:3px solid pink !important;}';

    function addStyleSheet(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        document.body.appendChild(node);
    }

    addStyleSheet(styleSheetAnchors);
})();
