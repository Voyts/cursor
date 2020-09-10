let tracks = ["camaro.mp3", "bmw.mp3", "gtr.mp3", "skyline.mp3", "mustang.mp3"],
    keyboardCode = [49, 50, 51, 52, 53],
    minusOne = -1,
    buttons = document.getElementsByTagName("button"),
    audio = new Audio;
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let index = parseInt(this.innerHTML) - 1;
        if (index != minusOne) audio.src = tracks[index];
        minusOne = index;
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
            audio.currentTime = 0.0;
        };
    }
}
document.onkeydown = function (e) {
    buttons[keyboardCode.indexOf(e.keyCode)].click();
}