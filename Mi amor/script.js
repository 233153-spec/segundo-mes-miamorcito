
const contenedorCorazones = document.getElementById("corazones");

const simbolos = ["❤️", "💕", "💗", "♡", "💖"];

for (let i = 0; i < 25; i++) {
    const corazon = document.createElement("span");

    corazon.classList.add("corazon");
    corazon.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    corazon.style.left = Math.random() * 100 + "%";
    corazon.style.animationDuration =
        (10 + Math.random() * 15) + "s";

    corazon.style.animationDelay =
        (-Math.random() * 20) + "s";

    corazon.style.fontSize =
        (15 + Math.random() * 18) + "px";

    contenedorCorazones.appendChild(corazon);
}

// Botón para mostrar u ocultar la sorpresa
const botonSorpresa = document.getElementById("botonSorpresa");
const mensajeSecreto = document.getElementById("mensajeSecreto");

botonSorpresa.addEventListener("click", function () {
    const abierto = mensajeSecreto.classList.toggle("visible");

    if (abierto) {
        botonSorpresa.textContent = "Cerrar mensajito 💗";

        mensajeSecreto.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    } else {
        botonSorpresa.textContent = "Pulsa aquí, mi amor 💖";
    }
});
