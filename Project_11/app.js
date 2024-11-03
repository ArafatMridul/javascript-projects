const time = document.querySelector(".time");
const playPause = document.querySelector("#play-pause");

let [hour, minute, second] = [0, 0, 0];
let timer = null;

function watchStart() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 0) {
            minute = 0;
            hour++;
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    time.innerHTML = `${h}:${m}:${s}`;
}

function startTime() {
    if (timer !== null) {
        clearInterval(timer);
    }

    if (playPause.classList.contains("fa-play")) {
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");

        timer = setInterval(() => {
            watchStart();
        }, 1000);
    } else {
        playPause.classList.add("fa-play");
        playPause.classList.remove("fa-pause");
        stopTime();
    }
}

function stopTime() {
    clearInterval(timer);
    if (playPause.classList.contains("fa-pause")) {
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
    }
}

function resetTime() {
    if (playPause.classList.contains("fa-pause")) {
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
    }

    clearInterval(timer);
    [hour, minute, second] = [0, 0, 0];
    time.innerHTML = `0${hour}:0${minute}:0${second}`;
}
