window.url = "";

chrome.runtime.onStartup.addListener(function() {
    chrome.browserAction.setIcon({ path: "icon.png" });
})


chrome.contextMenus.create({
    type: "checkbox",
    title: "Dark mode",
    checked: (window.localStorage.getItem("theme") == "dark"),
    contexts: ["browser_action"],
    onclick: function(info) {
        if(info.checked) window.localStorage.setItem("theme", "dark");
        else window.localStorage.setItem("theme", "light")
    }
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.popupOpen) { 
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            if(tabs[0].url === undefined) return
            
            let url = tabs[0].url;
            if(url.includes("https://www.youtube.com/watch?v="))
            {
                window.url = url;
            }
        });
    }
  });
