document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");

    // Mapeo de teclas a sonidos (puedes cambiar las rutas de sonido)
    const keySounds = {
        65: "sound1.mp3",
        83: "sound2.mp3",
        68: "sound3.mp3",
        70: "sound4.mp3",
        71: "sound5.mp3",
    };

    // Agrega un evento de clic y tecla a cada tecla
    keys.forEach((key) => {
        key.addEventListener("click", () => playSound(key.dataset.key));
        key.addEventListener("transitionend", removeTransition);
    });

    // Evento de tecla presionada
    window.addEventListener("keydown", (e) => {
        const sound = keySounds[e.keyCode];
        if (sound) {
            playSound(e.keyCode);
            const key = document.querySelector(`[data-key="${e.keyCode}"]`);
            key.classList.add("playing");
        }
    });

    // Función para reproducir el sonido
    function playSound(keyCode) {
        const sound = new Audio(`sounds/${keySounds[keyCode]}`);
        sound.play();
    }

    // Función para quitar la clase "playing" después de la transición
    function removeTransition(e) {
        if (e.propertyName !== "background-color") return;
        this.classList.remove("playing");
    }
});
