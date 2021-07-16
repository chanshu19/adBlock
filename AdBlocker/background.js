defaultFilters = [
    "*://lh6.googleusercontent.com/*",
    "*://yt3.ggpht.com/*",
    "*://.partner.googleadservices.com/*",
    "*://tpc.googlesyndication.com/*",
    "*://.google-analytics.com/*",
    "*://secure-ds.serving-sys.com/*",
    "*://media-exp1.licdn.com/*",
    "*://cdn.flashtalking.com/*"
]
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {cancel: true};
    },
    {urls: defaultFilters},
    ["blocking"]
  );