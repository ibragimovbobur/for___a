document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    music.play();

    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play();
        }
    });
});
