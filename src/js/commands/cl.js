/**
 * cl.js 1.0
 * http://canisbos.com/directlinks
 * When you click a link in Google search results, Google uses JavaScript to replace the actual link with an indirect one,
 * which they use for click tracking. Google then redirects the browser to the actual destination after logging the click.
 * This script disables the JavaScript that replaces real links with indirect ones, so that when you click a search result link,
 * the browser goes straight to the destination.
 */

(function() {
  if (window != top) {
    return;
  }
  if ((/^www\.google(\.[a-z]+)+$/).test(location.hostname)) {
    if (['/', '/search', '/webhp'].indexOf(location.pathname) >= 0) {
      document.addEventListener('mousedown', function(e) {
        var et = e.target,
          lc = -1;
        while (et && !(et instanceof HTMLAnchorElement) && (3 > lc++))
          et = et.parentElement;
        if (!et || !et.href)
          return;
        var link = et;
        e.stopPropagation();
        if (link.getAttribute('onmousedown')) {
          link.removeAttribute('onmousedown');
          if (link.pathname === '/url') {
            if ((/[?&]url=[^&]+/).test(link.search)) {
              link.href = decodeURIComponent(link.search.split(/[?&]url=/)[1].split('&')[0]);
              console.log('Link changed to', link.href);
            }
          }
        }
      }, false);
    }
  }
})();
