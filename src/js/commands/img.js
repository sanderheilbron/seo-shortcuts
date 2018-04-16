/**
 * img.js 1.0
 * Highlight images on the page that are missing an alt tag
 */

(function() {
    'use strict';

    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt.length === 0) {
            images[i].style.filter = 'grayscale(100%)';
            images[i].style.outline = '5px dashed #c00';
        }
    }
})();
