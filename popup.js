let bg;

document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({popupOpen: true});
    bg = chrome.extension.getBackgroundPage()
    if(bg.localStorage.getItem("theme") === "light"){
        if(document.body.classList.contains("dark")) document.body.classList.remove("dark")
    }
    else {
        if(!document.body.classList.contains("dark")) document.body.classList.add("dark")
    }
}, false)

const convertBtn = document.querySelector('.convert-button');
const TYPEinput = document.querySelector('.TYPE-input');


convertBtn.addEventListener('click', () => {
    const url = bg.url;
    sendURL(url, TYPEinput.value);
});

function sendURL(URL, TYPE) {
    window.open(`https://youtube-conv.herokuapp.com/download?URL=${URL}&TYPE=${TYPE}`, '_blank');
}
