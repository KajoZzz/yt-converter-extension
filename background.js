chrome.runtime.onStartup.addListener(function() {
    alert('open');
    chrome.browserAction.setIcon({ path: "icon.png" });
})

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if(url.includes("https://www.youtube.com/watch?v="))
        {
            let id = url.substring(url.lastIndexOf('=') + 1);
            chrome.windows.create({
                url: `https://www.yt-download.org/api/button/mp3/${id}`,
                focused: true,
                incognito: true,
                type: "popup",
                width: 500,
                height: 140
            });
        }
    });
})
