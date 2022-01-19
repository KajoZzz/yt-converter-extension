window.videoID = "";

chrome.runtime.onStartup.addListener(function() {
    chrome.browserAction.setIcon({ path: "icon.png" });
})

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if(url.includes("https://www.youtube.com/watch?v="))
        {
            let id = url.substring(url.lastIndexOf('?v=') + 3);
            if(url.includes("&t=")){
                id = id.slice(0, -(id.length - id.lastIndexOf('&t='))); 
            }

            window.videoID = id;

            chrome.windows.create({
                url: `popup.html`,
                focused: true,
                type: "popup",
                width: 500,
                height: 260
            });
        }
    });
})
