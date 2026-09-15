// ================================
// MODAL DE PELÍCULAS
// ================================

function mostrarPelicula(nombre, año) {

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-title");
    const texto = document.getElementById("modal-text");

    titulo.textContent = nombre;

    if (año === 2002) {

        texto.textContent =
            "Peter Parker obtiene sus poderes y comienza a descubrir qué significa realmente ser Spider-Man. Su primer gran enemigo será el Duende Verde.";

    } else if (año === 2004) {

        texto.textContent =
            "Peter Parker atraviesa una crisis personal mientras intenta mantener su vida como estudiante y su responsabilidad como Spider-Man. En esta historia se enfrenta al Doctor Octopus.";

    } else {

        texto.textContent =
            "Peter debe enfrentarse a nuevos enemigos y a una versión más oscura de sí mismo mientras intenta proteger a las personas que ama.";

    }

    modal.classList.add("active");
}


// ================================
// CERRAR MODAL
// ================================

function cerrarModal() {

    document.getElementById("modal").classList.remove("active");

}


// ================================
// CERRAR AL HACER CLICK FUERA
// ================================

document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        cerrarModal();
    }

});


// ================================
// ANIMACIÓN AL HACER SCROLL
// ================================

const elementos = document.querySelectorAll(
    ".movie-card, .ability, .info-card"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(elemento);

});