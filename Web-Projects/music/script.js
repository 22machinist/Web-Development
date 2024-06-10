document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const nowPlaying = document.getElementById('now-playing');
    const playlist = document.getElementById('playlist').getElementsByTagName('li');

    let currentIndex = 0;

    function loadSong(index) {
        const song = playlist[index];
        audio.src = song.getAttribute('data-src');
        nowPlaying.textContent = song.textContent;
        audio.play();
    }

    playButton.addEventListener('click', () => {
        audio.play();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadSong(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentIndex);
    });

    Array.from(playlist).forEach((song, index) => {
        song.addEventListener('click', () => {
            currentIndex = index;
            loadSong(currentIndex);
        });
    });

    loadSong(currentIndex);
});
