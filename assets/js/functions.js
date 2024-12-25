const palabras = ["HTML - CSS - JAVASCRIPT", "PROGRAMADOR FRONTEND"];
let indiceActual = 0;
const spanDinamico = document.getElementById("dynamic-username");

function cambiarPalabra() {
    const palabraActual = palabras[indiceActual];
    const siguienteIndice = (indiceActual + 1) % palabras.length;
    const siguientePalabra = palabras[siguienteIndice];
    spanDinamico.style.animation = "erasing 1s ease-in-out forwards";

    setTimeout(() => {
        indiceActual = siguienteIndice;
        spanDinamico.textContent = siguientePalabra;
        spanDinamico.style.animation = "typing 1s ease-in-out forwards";
    }, 1000);
}

setInterval(cambiarPalabra, 3500);
spanDinamico.textContent = palabras[indiceActual];
spanDinamico.style.animation = "typing 1s ease-in-out forwards";
