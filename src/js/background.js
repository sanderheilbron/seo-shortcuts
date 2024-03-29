// Open instructions document when the extension icon is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        url: "https://www.sanderheilbron.nl/seo-shortcuts/instructions",
    });
});

// Reset to default suggestion
function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
        description: "Type <match>help</match> for a list of commands",
    });
}

// Set suggestions and match command
chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
    text = text.replace(" ", "");

    // Commands
    const commands = [
        {
            content: "a",
            description:
                "<dim>command </dim><match>a</match> - Show visual annotations of all anchors",
        },
        {
            content: "ah",
            description:
                "<dim>command </dim><match>ah</match> - Check current URL in Ahrefs Site Explorer",
        },
        {
            content: "ais",
            description:
                "<dim>command </dim><match>ais</match> - Check current URL in Archive.is",
        },
        {
            content: "alt",
            description:
                "<dim>command </dim><match>alt</match> - Highlight images on the page that are missing an alt tag",
        },
        {
            content: "ampt",
            description:
                "<dim>command </dim><match>ampt</match> - Check current URL in Google Search Console AMP Test",
        },
        {
            content: "ampv",
            description:
                "<dim>command </dim><match>ampv</match> - Check current URL in Google AMP Validator",
        },
        {
            content: "bw",
            description:
                "<dim>command </dim><match>bw</match> - Check current URL in BuiltWith",
        },
        {
            content: "cdn",
            description:
                "<dim>command </dim><match>cdn</match> - Look up the names of all CDNs used on a web page",
        },
        {
            content: "cl",
            description:
                "<dim>command </dim><match>cl</match> - Disable Google click tracking in Google Search Engine Result Page",
        },
        {
            content: "ct",
            description:
                "<dim>command </dim><match>ct</match> - Take a look inside the head tag of the page with ct.css (by @csswizardry)",
        },
        {
            content: "dns",
            description:
                "<dim>command </dim><match>dns</match> - Check current hostname in Google DNS service",
        },
        {
            content: "dnsz",
            description:
                "<dim>command </dim><match>dnsz</match> - Check DNS zones of current host in Zone Vision",
        },
        {
            content: "gc",
            description:
                "<dim>command </dim><match>gc</match> - Check current URL in Google cache",
        },
        {
            content: "gs",
            description:
                "<dim>command </dim><match>gs</match> - Check current URL in Google Search index",
        },
        {
            content: "gsc",
            description:
                "<dim>command </dim><match>gsc</match> - Check current origin in Google Search Console",
        },
        {
            content: "gtm",
            description:
                "<dim>command </dim><match>gtm</match> - Check current URL with GTmetrix",
        },
        {
            content: "hl",
            description:
                "<dim>command </dim><match>hl</match> - Check hreflang annotations for current URL in hreflang.ninja",
        },
        {
            content: "hsts",
            description:
                "<dim>command </dim><match>hsts</match> - Check current domain for HSTS Preload List Submission",
        },
        {
            content: "http",
            description:
                "<dim>command </dim><match>http</match> - Check current URL in httpstatus.io",
        },
        {
            content: "hx",
            description:
                "<dim>command </dim><match>hx</match> - Show visual annotations of the HTML heading structure",
        },
        {
            content: "hxa",
            description:
                "<dim>command </dim><match>hxa</match> - Show visual annotations of the HTML heading structure and anchors",
        },
        {
            content: "lazy",
            description:
                "<dim>command </dim><match>lazy</match> - Highlight images on the page that are lazy loaded (native lazy loading)",
        },
        {
            content: "lcp",
            description:
                "<dim>command </dim><match>lcp</match> - Show the largest contentful paint element in a page",
        },
        {
            content: "ld",
            description:
                "<dim>command </dim><match>ld</match> - Show contents of JSON-LD script tags for the current URL in the console",
        },
        {
            content: "mft",
            description:
                "<dim>command </dim><match>mft</match> - Check current URL in Google mobile-friendly tool",
        },
        {
            content: "mj",
            description:
                "<dim>command </dim><match>mj</match> - Check current URL in Majestic Backlink Checker",
        },
        {
            content: "obs",
            description:
                "<dim>command </dim><match>obs</match> - Check current hostname in Observatory by Mozilla",
        },
        {
            content: "pa",
            description:
                "<dim>command </dim><match>pa</match> - Shows a performance analysis of the current page through the Resource Timing API, Navigation Timing API and User-Timing",
        },
        {
            content: "pm",
            description:
                "<dim>command </dim><match>pm</match> - Shows a front-end performance heatmap of images loaded in the browser using the Resource Timing API",
        },
        {
            content: "psc",
            description:
                "<dim>command </dim><match>psc</match> - Check current URL in PageSpeed Compare",
        },
        {
            content: "psi",
            description:
                "<dim>command </dim><match>psi</match> - Check current URL in Google PageSpeed Insights",
        },
        {
            content: "rh",
            description:
                "<dim>command </dim><match>rh</match> - Check current URL in Browser Resource Hint Validator",
        },
        {
            content: "rrtt",
            description:
                "<dim>command </dim><match>rrtt</match> - Check current URL in Google Rich Results Test Tool",
        },
        {
            content: "rtt",
            description:
                "<dim>command </dim><match>rtt</match> - Check current URL in Robots.txt Test Tool",
        },
        {
            content: "sais",
            description:
                "<dim>command </dim><match>sais</match> - Save current URL in Archive.is",
        },
        {
            content: "smv",
            description:
                "<dim>command </dim><match>smv</match> - Check current URL in Schema Markup Validator",
        },
        {
            content: "sh",
            description:
                "<dim>command </dim><match>sh</match> - Check current URL in SecurityHeaders.io",
        },
        {
            content: "sm",
            description:
                "<dim>command </dim><match>sm</match> - Check current hostname in Searchmetrics",
        },
        {
            content: "sidn",
            description:
                "<dim>command </dim><match>sidn</match> - Check current URL in SIDN.nl whois database",
        },
        {
            content: "size",
            description:
                "<dim>command </dim><match>size</match> - Highlight images on the page that do not have width and height attributes",
        },
        {
            content: "sm",
            description:
                "<dim>command </dim><match>sm</match> - Check current hostname in Searchmetrics",
        },
        {
            content: "ssl",
            description:
                "<dim>command </dim><match>ssl</match> - Check current hostname in SSL Server Test (Powered by Qualys SSL Labs)",
        },
        {
            content: "tls",
            description:
                "<dim>command </dim><match>tls</match> - Check current hostname in TLS checker",
        },
        {
            content: "treo",
            description:
                "<dim>command </dim><match>treo</match> - Check current hostname in Treo.sh",
        },
        {
            content: "txt",
            description:
                "<dim>command </dim><match>txt</match> - Open robots.txt for current host",
        },
        {
            content: "wbm",
            description:
                "<dim>command </dim><match>wbm</match> - Check current URL in Wayback Machine",
        },
        {
            content: "whois",
            description:
                "<dim>command </dim><match>whois</match> - Check current host in WHOIS Search",
        },
        {
            content: "wf",
            description:
                "<dim>command </dim><match>wf</match> - Check current URL in Waterfaller.dev",
        },
        {
            content: "wpt",
            description:
                "<dim>command </dim><match>wpt</match> - Check current URL in WebPageTest.org",
        },
        {
            content: "xml",
            description:
                "<dim>command </dim><match>xml</match> - Open sitemap.xml for current host",
        },
        {
            content: "ylt",
            description:
                "<dim>command </dim><match>ylt</match> - Check current URL in Yellow Lab Tools",
        },
    ];

    // Filter suggestions
    function filteredResults(suggestions, searchQuery) {
        if (searchQuery !== "") {
            // to avoid to show the first 5 commands from the commands array as default
            return suggestions.filter(function (result) {
                return result.content.indexOf(searchQuery) > -1;
            });
        }
    }

    if (text === "") {
        suggest([]); // prevent empty suggestion errors
    } else {
        suggest(filteredResults(commands, text));
    }

    // Get description for matched command
    let description;

    function getDescriptionForMatchedCommand(command, arrayOfCommands) {
        return arrayOfCommands
            .filter(function (result) {
                return result.content === command;
            })
            .map(function (result) {
                const originalDescription = result.description;
                const modifiedDescription = originalDescription.replace(
                    /<match>(.*)<\/match>/,
                    "<url><match>$1</match></url>"
                );
                return (description = modifiedDescription);
            });
    }

    getDescriptionForMatchedCommand(text, commands);

    if (description) {
        chrome.omnibox.setDefaultSuggestion({
            description: description,
        });
    } else {
        resetDefaultSuggestion();
    }
});

// Reset to default suggestions when the input is cancelled
chrome.omnibox.onInputCancelled.addListener(function () {
    resetDefaultSuggestion();
});

// This event is fired when the user accepts the input in the omnibox
chrome.omnibox.onInputEntered.addListener(function (text, tab) {
    if (text !== "help") {
        chrome.tabs.executeScript(tab.id, {
            file: "js/commands/" + text + ".js",
        });
    } else {
        chrome.tabs.create({
            url: "https://www.sanderheilbron.nl/seo-shortcuts/commands",
        });
    }
});

// Check whether new version or update is installed
chrome.runtime.onInstalled.addListener(function (details) {
    // Set uninstall URL
    var uninstallURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSeLZpl4su4prjwTwZTYBYmfUTMwCtBUQOu_Q2iWb4cUGxx-kQ/viewform?usp=sf_link";
    if (details.reason == "install") {
        // This is a first install!
        chrome.tabs.create({
            url: "https://www.sanderheilbron.nl/seo-shortcuts/instructions",
        });
        // Set default option preferences
        chrome.storage.sync.set(
            {
                countryVersion: "com",
                interfaceLanguage: "en",
                autoRun: false,
            },
            function (settings) {}
        );
        // If Chrome version supports it, uninstall extension for new users and open uninstall URL
        if (chrome.runtime.setUninstallURL) {
            chrome.runtime.setUninstallURL(uninstallURL);
        }
    } else if (details.reason == "update") {
        // Show release notes
        var thisVersion = chrome.runtime.getManifest().version;
        // console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
        if (thisVersion > details.previousVersion) {
            chrome.tabs.create({
                url: "https://www.sanderheilbron.nl/seo-shortcuts/upgrade",
            });
        }
        // If Chrome version supports it, uninstall extension for updated (1.4.0) users and open uninstall URL
        if (chrome.runtime.setUninstallURL) {
            chrome.runtime.setUninstallURL(uninstallURL);
        }
    }
});
