const instructionModal = document.getElementById('instruction-modal');
const acceptBtn = document.getElementById('accept-instructions');
const backgroundAudio = document.getElementById('background-audio');
const audioToggle = document.getElementById('audio-toggle');

backgroundAudio.volume = 0.6; // Volumen inicial al 20%

acceptBtn.addEventListener('click', () => {
    instructionModal.style.display = 'none';
    
    // Reproducir audio
    backgroundAudio.play().catch((err) => {
        console.warn('No se pudo reproducir el audio automáticamente:', err);
    });
});


// Botón de volumen
audioToggle.addEventListener('click', () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioToggle.textContent = '🔊';
    } else {
        backgroundAudio.pause();
        audioToggle.textContent = '🔇';
    }
});
