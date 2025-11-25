// Generate random stars
function generateStars() {
    const starsContainer = document.getElementById('stars-container');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Audio controls
const audioToggle = document.getElementById('audioToggle');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

audioToggle.addEventListener('click', toggleAudio);

// Attempt to autoplay with user interaction fallback
window.addEventListener('click', attemptAutoplay, { once: true });
window.addEventListener('touchstart', attemptAutoplay, { once: true });

function attemptAutoplay() {
    if (!isPlaying) {
        bgMusic.play().catch(() => {
            console.log('Autoplay blocked - user must interact first');
        });
    }
}

function toggleAudio() {
    if (isPlaying) {
        bgMusic.pause();
        audioToggle.textContent = '🔇';
        isPlaying = false;
    } else {
        bgMusic.play();
        audioToggle.textContent = '🔊';
        isPlaying = true;
    }
}

bgMusic.addEventListener('play', () => {
    isPlaying = true;
    audioToggle.textContent = '🔊';
});

bgMusic.addEventListener('pause', () => {
    isPlaying = false;
    audioToggle.textContent = '🔇';
});

// Initialize
generateStars();
