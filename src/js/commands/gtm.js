/**
 * gtm.js 1.1
 * Check current (exact) URL in GTmetrix.com
 */

(function() {
    'use strict';
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'https://gtmetrix.com/analyze.html?bm');
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', 'url');
    input.setAttribute('value', document.location.href);
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
})();
