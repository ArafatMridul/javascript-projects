const progress = document.querySelector("#progress");
const song = document.querySelector("#song");
const playIcon = document.querySelector("#play-icon");

console.log(playIcon);

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(playIcon.classList.contains("fa-pause")) {
        song.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    } else {
        song.play();
        playIcon.classList.add("fa-pause");
        playIcon.classList.remove("fa-play");
    }
}

if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
}

// playIcon.addEventListener("click", playPause);