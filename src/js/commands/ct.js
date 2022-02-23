/**
 * ct.js 1.0
 * ct.css is a diagnostic CSS snippet that exposes potential performance issues in your page’s <head> tags.
 * © Harry Roberts 2021 – twitter.com/csswizardry
 * https://github.com/csswizardry/ct/blob/master/ct.css
 *
 */

(function () {
    "use strict";

    var styleContent =
        'head {--ct-is-problematic: solid;--ct-is-affected: dashed;--ct-notify: #0bce6b;--ct-warn: #ffa400;--ct-error: #ff4e42;}head, head script, head script:not([src])[async], head script:not([src])[defer], head style, head [rel="stylesheet"], head script ~ meta[http-equiv="content-security-policy"], head > meta[charset]:not(:nth-child(-n+5)) {display: block;}head script, head style, head [rel="stylesheet"], head title, head script ~ meta[http-equiv="content-security-policy"], head > meta[charset]:not(:nth-child(-n+5)) {margin: 5px;padding: 5px;border-width: 5px;background-color: white;color: #333;}head ::before, head script, head style {font: 16px/1.5 monospace, monospace;display: block;}head ::before {font-weight: bold;}head script[src], head link[rel="stylesheet"] {border-style: var(--ct-is-problematic);border-color: var(--ct-warn);}head script[src]::before {content: "[Blocking Script – " attr(src) "]" }head link[rel="stylesheet"]::before {content: "[Blocking Stylesheet – " attr(href) "]" }head style:not(:empty), head script:not(:empty) {max-height: 5em;overflow: auto;background-color: #ffd;white-space: pre;border-color: var(--ct-notify);border-style: var(--ct-is-problematic);}head script:not(:empty)::before {content: "[Inline Script] ";}head style:not(:empty)::before {content: "[Inline Style] ";}head script[src]:not([async]):not([defer]):not([type=module]) ~ title, head script:not(:empty) ~ title {display: block;border-style: var(--ct-is-affected);border-color: var(--ct-error);}head script[src]:not([async]):not([defer]):not([type=module]) ~ title::before, head script:not(:empty) ~ title::before {content: "[<title> blocked by JS] ";}head [rel="stylesheet"]:not([media="print"]):not(.ct) ~ script, head style:not(:empty) ~ script {border-style: var(--ct-is-affected);border-color: var(--ct-warn);}head [rel="stylesheet"]:not([media="print"]):not(.ct) ~ script::before, head style:not(:empty) ~ script::before {content: "[JS blocked by CSS – " attr(src) "]";}head script[src][src][async][defer] {display: block;border-style: var(--ct-is-problematic);border-color: var(--ct-warn);}head script[src][src][async][defer]::before {content: "[async and defer is redundant: prefer defer – " attr(src) "]";}head script:not([src])[async], head script:not([src])[defer] {border-style: var(--ct-is-problematic);border-color: var(--ct-warn);}head script:not([src])[async]::before {content: "The async attribute is redundant on inline scripts" }head script:not([src])[defer]::before {content: "The defer attribute is redundant on inline scripts" }head script[src][src][src^="//"], head script[src][src][src^="http"], head [rel="stylesheet"][href^="//"], head [rel="stylesheet"][href^="http"] {border-style: var(--ct-is-problematic);border-color: var(--ct-error);}head script[src][src][src^="//"]::before, head script[src][src][src^="http"]::before {content: "[Third Party Blocking Script – " attr(src) "]";}head [rel="stylesheet"][href^="//"]::before, head [rel="stylesheet"][href^="http"]::before {content: "[Third Party Blocking Stylesheet – " attr(href) "]";}head script ~ meta[http-equiv="content-security-policy"] {border-style: var(--ct-is-problematic);border-color: var(--ct-error);}head script ~ meta[http-equiv="content-security-policy"]::before {content: "[Meta CSP defined after JS]" }head > meta[charset]:not(:nth-child(-n+5)) {border-style: var(--ct-is-problematic);border-color: var(--ct-warn);}head > meta[charset]:not(:nth-child(-n+5))::before {content: "[Charset should appear as early as possible]";}link[rel="stylesheet"][media="print"], link[rel="stylesheet"].ct, style.ct, script[async], script[defer], script[type=module] {display: none;}';

    function addStyleSheet(str) {
        var node = document.createElement("style");
        node.innerHTML = str;
        document.head.appendChild(node);
    }

    addStyleSheet(styleContent);
})();
