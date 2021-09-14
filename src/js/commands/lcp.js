/**
 * lcp.js 1.0
 * Show the largest contentful paint element in a page.
 *
 * Developed by Annie Sullivan (https://twitter.com/anniesullie)
 * https://gist.github.com/anniesullie/cf2982342337fd1b2be95c2d5fe5ea06
 */

(function () {
    "use strict";

    try {
        const canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "absolute";
        canvas.style.left = 0;
        canvas.style.top = 0;
        canvas.style.zIndex = 100000;
        canvas.style.pointerEvents = "none";
        document.body.appendChild(canvas);
        const context = canvas.getContext("2d");
        const po = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                let rect = entry.element.getBoundingClientRect();
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.strokeStyle = "red";
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            }
        });

        po.observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {}
})();
