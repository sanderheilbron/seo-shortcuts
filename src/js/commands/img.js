/**
 * img.js 1.0
 * Find images on page without alt tags
 */

(function() {
  "use strict";

  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    if (images[i].alt.length === 0) {
      images[i].style.filter = 'grayscale(100%)';
      images[i].style.outline = '3px dashed purple';
    }
  }

})();
