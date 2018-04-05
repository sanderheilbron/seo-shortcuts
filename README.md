# SEO Shortcuts
A browser extension for Chrome

The command line interface for your browser. Gives easy access to web services, annotations inside the browser window, and script output in the browser console.

## Smart bookmarklet
SEO Shortcuts is a Chrome extension that functions as a smart bookmarklet. It features several commands which can be accessed through Google Chrome's address bar, which is also known as the omnibox.

## How to use
When you enter the extension's keyword <kbd>Shift</kbd> + <kbd>></kbd> and press <kbd>Tab</kbd>, you start interacting solely with the extension. By typing a command the extension shows suggestions of available commands which match your search query.

You can use the command ```help``` to open an overview of all available commands. SEO Shortcuts provides several commands which are relevant for SEO, Performance (WPO) and Security.

## Command types
There are three types of commands available.

### Open
Checks the current URL, hostname or origin in external web services. The extension opens a new browser tab with the selected external web service and prepopulates the URL input field.

### Inject
Injects a stylesheet or runs a script inside the DOM of the current visited webpage. The output or results will be visible or enabled inside the current browser tab.

### Run
Runs a script inside the DOM of the current visited webpage. The output or results will be visible in the browser console (Chrome DevTools) of the current browser tab.

## Commands overview
### SEO commands

| Command      | Type       | Description |
|--------------|------------|-------------|
| ```a```      | Inject     | Annotations of all anchors  |
| ```ais```    | Open       | [Archive.is webpage capture](http://archive.is/) |
| ```ah```     | Open       | [Ahrefs Site Explorer](https://ahrefs.com/) |
| ```ampb```   | Open       | [AMPBench](https://ampbench.appspot.com/validate?url=https%3A%2F%2Fampbyexample.com%2F) |
| ```ampv```   | Open       | [AMP Validator](https://validator.ampproject.org/) |
| ```ampt```   | Open       | [Google Search Console AMP Test](https://search.google.com/search-console/amp)  |
| ```cl```     | Inject     | Disable Google click tracking in Google SERP |
| ```dns```     | Open      | [Google DNS service](https://dns.google.com/)  |
| ```dnsz```     | Open     | [Zone Vision (DNSimple)](http://zone.vision/)  |
| ```gc```     | Open       | Google Search cache: command  |
| ```gi```     | Open       | Google Search info: command  |
| ```gs```     | Open       | Google Search site: command  |
| ```gsc```    | Open       | [Google Search Console](https://www.google.com/webmasters/)  |
| ```hl```     | Open       | [hreflang.ninja](http://hreflang.ninja/)  |
| ```hx```     | Inject     | Annotations of heading structure  |
| ```hxa```    | Inject     | Annotations of heading structure and anchors  |
| ```img```    | Inject     | Highlight images on the page that are missing an alt tag  |
| ```ld```     | Runs       | Show all JSON-LD script tags for the current tab |
| ```mft```     | Open      | [Google Mobile-Friendly Test](https://search.google.com/search-console/mobile-friendly)  |
| ```mj```     | Open       | [Majestic Backlink Checker](https://majestic.com/)  |
| ```ose```    | Open       | [Moz Open Site Explorer](https://moz.com/researchtools/ose/)  |
| ```rtt```    | Open       | [OnPage.org Robots.txt Test Tool](https://en.onpage.org/free-tools/robots-txt/)  |
| ```sais```   | Open       | [Capture webpage in Archive.is](http://archive.is/)  |
| ```sdtt```   | Open       | [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)  |
| ```sm```     | Open       | [Searchmetrics](http://suite.searchmetrics.com/en/research)  |
| ```txt```    | Open       | Show robots.txt for current host  |
| ```wbm```    | Open       | [Wayback Machine](http://archive.org/web/)  |
| ```whois```  | Open       | [WHOIS Search (DNSimple)](https://dnsimple.com/whois/)  |
| ```xml```     | Open      | Show sitemap.xml for current host  |

### WPO commands

| Command      | Type       | Description |
|--------------|------------|-------------|
| ```cdn```    | Open       | [CDN Finder tool - CDNPlanet](https://www.cdnplanet.com) |
| ```gtm```    | Open       | [GTmetrix](https://gtmetrix.com/) |
| ```pa```     | Inject     | [Performance-Analyser](https://github.com/micmro/performance-bookmarklet)  |
| ```pm```     | Inject     | [PerfMap: front-end performance heatmap](https://github.com/zeman/perfmap)  |
| ```psi```    | Open       | [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)  |
| ```si```     | Run        | [RUM-SpeedIndex](https://github.com/WPO-Foundation/RUM-SpeedIndex)  |
| ```wpt```     | Open      | [WHOIS Search (DNSimple)](https://dnsimple.com/whois/)  |
| ```ylt```     | Open      | [Yellow Lab Tools](http://yellowlab.tools/)  |

### Security commands

| Command      | Type       | Description |
|--------------|------------|-------------|
| ```obs```    | Open       | [Observatory by Mozilla](https://observatory.mozilla.org/)  |
| ```sh```     | Open       | [SecurityHeaders.io](https://securityheaders.io/)  |
| ```ssl```    | Open       | [SSL Server Test (Qualys SSL Labs)](https://www.ssllabs.com/)  |

## Settings
You can set the preferred Google .tld and interface language for most of Google's web services. Open the extension options in the Chrome Extensions settings.

## Installation
Download and install the Chrome extension from the [Chrome Web Store][1].

## Usage
### Windows
1. Open a browser tab and visit a website
2. Select the Omnibox: <kbd>Ctrl</kbd> + <kbd>L</kbd> or click the Omnibox once
3. Type <kbd>Shift</kbd> + <kbd>></kbd> and press <kbd>Tab</kbd>
4. Type a command<sup>∗</sup> and press <kbd>Enter</kbd>

### MacOS
1. Open a browser tab and visit a website
2. Select the Omnibox: <kbd>Cmd</kbd>  + <kbd>L</kbd> or click the Omnibox once
3. Type <kbd>Shift</kbd> + <kbd>></kbd> and press <kbd>Tab</kbd>
4. Type a command<sup>∗</sup> and press <kbd>Enter</kbd>

<sup>∗</sup> use command ```help``` for an overview of all available commands

## Issues
Have a bug? Please create an [issue][2] here on GitHub!

## Contributing
Want to contribute? Great! Just fork the project, work on new features or bug fixes using feature branches and open [pull-requests][3] with concise but complete descriptions of your changes.

If you are unsure about a proposal, you can just open an issue to discuss it before writing actual code.

## Changelog
See [changelog][5] for details.

[1]: https://chrome.google.com/webstore/detail/seo-shortcuts/jkkkmikjgkdljhmpnjajedkngkgefejf
[2]: https://github.com/sanderheilbron/seo-shortcuts/issues
[3]: https://github.com/sanderheilbron/seo-shortcuts/pulls
[4]: https://www.sanderheilbron.nl
[5]: https://github.com/sanderheilbron/seo-shortcuts/blob/master/CHANGELOG.md
