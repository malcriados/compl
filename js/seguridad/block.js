// Bloquear clic derecho
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Bloquear teclas comunes del Inspector (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
    }
});

// Bloqueo por detección de DevTools abierto (no es infalible)
let devtools = {
    open: false,
    orientation: null
};

(function() {
    const threshold = 160;
    setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            if (!devtools.open) {
                devtools.open = true;
                alert('Herramientas de desarrollador detectadas. Cierrelas para continuar.');
                window.location.reload(); // o redirecciona, o cierra
            }
        } else {
            devtools.open = false;
        }
    }, 1000);
})();

