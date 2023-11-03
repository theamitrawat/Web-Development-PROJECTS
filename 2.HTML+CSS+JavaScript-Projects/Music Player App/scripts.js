let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let playIcon = document.querySelector('#play');

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (playIcon.classList.contains('fa-pause')) {
        song.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    } else {
        song.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
}