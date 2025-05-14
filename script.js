
    // Exercício 1
/* document.querySelector("button").addEventListener("click", function() {
    let elemento = document.getElementById("azul");
    if (elemento.style.backgroundColor == "blue") {
        elemento.style.backgroundColor = "yellow";
    } else {
        elemento.style.backgroundColor = "blue";
    }
}) */

// Exercício 2

/* let listaNumeros = [65, 44, 12, 4];

listaNumeros.forEach(numero => console.log(numero * 10)); */

// Exercício 3

let quadrado = document.querySelector(".quadrado");

quadrado.addEventListener("click", () => {

    if (quadrado.classList.contains("azul")) {
        quadrado.classList.remove("azul");
    } else {
        quadrado.classList.add("azul");
    }
});

