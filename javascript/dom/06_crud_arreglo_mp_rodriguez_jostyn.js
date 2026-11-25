let zapatos = [
    { nombre: "DVS Comanche", precio: 85, stock: 5 },
    { nombre: "DC Stag", precio: 75, stock: 8 }
];
let indiceEditar = -1;
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
const lista = document.getElementById("lista");
const guardar = document.getElementById("guardar");
const mensaje = document.getElementById("mensaje");

function mostrar() {
    lista.innerHTML = "";
    for (let i = 0; i < zapatos.length; i++) {
        let fila = document.createElement("tr");
        let datos = [zapatos[i].nombre, "$" + zapatos[i].precio.toFixed(2), zapatos[i].stock];
        for (let j = 0; j < datos.length; j++) {
            let celda = document.createElement("td");
            celda.textContent = datos[j];
            fila.appendChild(celda);
        }
        let acciones = document.createElement("td");
        let botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", function () { editar(i); });
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () { eliminar(i); });
        acciones.appendChild(botonEditar);
        acciones.appendChild(botonEliminar);
        fila.appendChild(acciones);
        lista.appendChild(fila);
    }
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let zapato = { nombre: nombre.value.trim(), precio: Number(precio.value), stock: Number(stock.value) };
    if (zapato.nombre === "" || zapato.precio <= 0 || zapato.stock < 0) {
        mensaje.textContent = "Datos invalidos";
        return;
    }
    if (indiceEditar === -1) {
        zapatos.push(zapato);
        mensaje.textContent = "Zapato agregado";
    } else {
        zapatos[indiceEditar] = zapato;
        mensaje.textContent = "Zapato actualizado";
    }
    limpiar();
    mostrar();
});

function editar(i) {
    indiceEditar = i;
    nombre.value = zapatos[i].nombre;
    precio.value = zapatos[i].precio;
    stock.value = zapatos[i].stock;
    guardar.textContent = "Actualizar";
}

function eliminar(i) {
    zapatos.splice(i, 1);
    limpiar();
    mostrar();
    mensaje.textContent = "Zapato eliminado";
}

function limpiar() {
    formulario.reset();
    indiceEditar = -1;
    guardar.textContent = "Agregar";
}

document.getElementById("cancelar").addEventListener("click", limpiar);
mostrar();
