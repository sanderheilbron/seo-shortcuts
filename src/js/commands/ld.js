/**
 * ld.js 1.0
 * Show contents of JSON-LD script tags for the current URL in the console
 */

(function() {
    'use strict';

    const el = Array.from(
        document.querySelectorAll('[type="application/ld+json"]')
    );
    let count = 0;
    console.info(
        `Found ${el.length} JSON-LD script element${
            el.length === 1 ? '' : 's'
        }.`
    );

    el.forEach.call(el, element => {
        count++;
        const markUp = JSON.parse(element.innerHTML);
        const itemScope = markUp['@context'] + '/' + markUp['@type'];

        console.groupCollapsed(
            `%cScript element #${count} - ${itemScope}`,
            'color:blue'
        );
        console.log(JSON.stringify(markUp, null, 2));
        console.groupEnd();
    });
})();
