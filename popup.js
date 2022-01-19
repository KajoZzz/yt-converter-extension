document.addEventListener('DOMContentLoaded', function () {
    const bg = chrome.extension.getBackgroundPage()
    const id = bg.videoID

    document.title = id;

    let div = document.createElement('div');
    div.innerHTML = `
        <iframe src="https://www.yt-download.org/api/button/mp3/${id}" width="100%" height="100px" scrolling="no" style="border:none;"></iframe>
        <br>
        <iframe src="https://www.yt-download.org/api/button/videos/${id}" width="100%" height="100px" scrolling="no" style="border:none;"></iframe>`;

    document.body.appendChild(div);

}, false)