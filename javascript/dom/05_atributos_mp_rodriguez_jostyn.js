let zapato = document.getElementById("zapato");
let cambiar = document.getElementById("cambiar");
let verMarca = document.getElementById("verMarca");
let marca = document.getElementById("marca");
let estilo = document.getElementById("estilo");

cambiar.addEventListener("click", function () {
    if (zapato.getAttribute("title") == "DVS") {
        zapato.setAttribute("src", "stag.jpeg");
        zapato.setAttribute("title", "STAG");
        zapato.setAttribute("alt", "Zapatillas STAG");
        zapato.dataset.marca = "STAG";
    } else {
        zapato.setAttribute("src", "dvs.jpeg");
        zapato.setAttribute("title", "DVS");
        zapato.setAttribute("alt", "Zapatillas DVS");
        zapato.dataset.marca = "DVS";
    }
    marca.textContent = "Marca: " + zapato.dataset.marca;
});

verMarca.addEventListener("click", function () {
    marca.textContent = "Marca: " + zapato.dataset.marca;
});

estilo.addEventListener("click", function () {
    if (marca.getAttribute("class") == "destacado") {
        marca.removeAttribute("class");
        zapato.style.border = "none";
    } else {
        marca.setAttribute("class", "destacado");
        zapato.style.border = "3px solid blue";
    }
});
