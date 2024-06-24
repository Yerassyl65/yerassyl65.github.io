document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const button = document.getElementById('music-button');

    button.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            button.textContent = "Pause Music";
        } else {
            audio.pause();
            button.textContent = "Play Music";
        }
    });

    // Автоматическая прокрутка вниз после загрузки страницы
    setTimeout(function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }, 2000); // 2 секунды задержка перед началом прокрутки
});
