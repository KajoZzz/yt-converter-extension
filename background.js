window.url = "";

chrome.runtime.onStartup.addListener(function() {
    chrome.browserAction.setIcon({ path: "icon.png" });
})

chrome.contextMenus.create({
    type: "radio",
    title: "Bright theme",
    checked: (window.localStorage.getItem("theme") === "bright"),
    contexts: ["browser_action"],
    onclick: function() {
        window.localStorage.setItem("theme", "bright");
    }
});
chrome.contextMenus.create({
    type: "radio",
    title: "Dark theme",
    checked: (window.localStorage.getItem("theme") === "dark"),
    contexts: ["browser_action"],
    onclick: function() {
        window.localStorage.setItem("theme", "dark");
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
