/**
 * hx.js 1.0
 * Show visual annotations of the HTML heading structure
 */

(function() {
    'use strict';

    var styleSheetHeadings = 'h1,h2,h3,h4,h5,h6{text-shadow:none!important;background-color:#fff!important;text-indent:0!important;background-image:none!important}h1,h2,h3,h4,h5,h6,h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:red!important;outline:1px solid #aaa!important}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{outline:none!important}h1{font-size:24px!important}h2{font-size:20px!important}h3{font-size:16px!important}h4{font-size:12px!important}h1:before{content:"<H1>"}h1:after{content:"</H1>"}h2:before{content:"<H2>"}h2:after{content:"</H2>"}h3:before{content:"<H3>"}h3:after{content:"</H3>"}h4:before{content:"<H4>"}h4:after{content:"</H4>"}h5:before{content:"<H5>"}h5:after{content:"</H5>"}h6:before{content:"<H6>"}h6:after{content:"</H6>"}';

    function addStyleSheet(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        document.body.appendChild(node);
    }

    addStyleSheet(styleSheetHeadings);
})();
