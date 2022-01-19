let bg;

document.addEventListener('DOMContentLoaded', function () {
    bg = chrome.extension.getBackgroundPage()
}, false)

const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');
const TYPEinput = document.querySelector('.TYPE-input');


convertBtn.addEventListener('click', () => {
    const url = bg.url
    sendURL(url, TYPEinput.value);
});

function sendURL(URL, TYPE) {
    window.location.href = `https://youtube-conv.herokuapp.com/download?URL=${URL}&TYPE=${TYPE}`;
}
