let nombre = document.getElementById("nombre");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");

boton.onclick = function () {
    if (nombre.value.trim() == "") {
        resultado.textContent = "Escribe tu nombre para continuar.";
    } else {
        resultado.innerHTML = "<h3>¡Bienvenido a FOUDSHOEZ!</h3><p id='cliente'></p><p>Tenemos zapatillas para tu estilo.</p>";
        document.getElementById("cliente").textContent = "Cliente: " + nombre.value;
    }
};
