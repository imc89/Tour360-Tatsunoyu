const instructionModal = document.getElementById('instruction-modal');
const acceptBtn = document.getElementById('accept-instructions');
const backgroundAudio = document.getElementById('background-audio');
const audioToggle = document.getElementById('audio-toggle');

backgroundAudio.volume = 0.9; // Volumen inicial al 20%

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


document.getElementById('accept-instructions').addEventListener('click', () => {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {

        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    viewer.setPitch(viewer.getPitch()); // fuerza el refresh
                    alert('Control por movimiento habilitado.');
                } else {
                    alert('Permiso denegado.');
                }
            })
            .catch(error => {
                console.error('Error al solicitar permiso:', error);
            });
    } else {
        alert('Este dispositivo no requiere permiso para el control por movimiento.');
    }
});