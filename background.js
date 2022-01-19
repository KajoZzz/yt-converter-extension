window.url = "";

chrome.runtime.onStartup.addListener(function() {
    chrome.browserAction.setIcon({ path: "icon.png" });
})

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if(url.includes("https://www.youtube.com/watch?v="))
        {
            window.url = url;

            chrome.windows.create({
                url: `popup.html`,
                focused: true,
                type: "popup",
                width: 500,
                height: 300
            });
        }
    });
})
