window.onload = function() {
    // Activar corazones flotantes desde que se carga la página principal
    for (let i = 0; i < 50; i++) {
        crearCorazon();
    }
};

function mostrarSorpresa() {
    // Mostrar la sorpresa
    document.getElementById("pagina-presentacion").style.display = "none";
    document.getElementById("pagina-sorpresa").style.display = "block";
}

// Lógica del carrusel
let indexFoto = 0;
const fotos = document.querySelectorAll(".carrusel .fotos img");

function cambiarFoto(n) {
    fotos[indexFoto].classList.remove("foto-activa");
    indexFoto = (indexFoto + n + fotos.length) % fotos.length;
    fotos[indexFoto].classList.add("foto-activa");
}

// Crear corazones flotantes
function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById("corazones-flotantes").appendChild(corazon);

    // Remover corazón después de la animación
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}
