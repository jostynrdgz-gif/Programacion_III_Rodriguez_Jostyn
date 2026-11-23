let producto = document.getElementById("producto");
let precio = document.querySelector(".precio");
let marca = document.getElementsByClassName("marca")[0];
let boton = document.getElementById("boton");

boton.onclick = function () {
    producto.textContent = "Vans Old Skool en oferta";
    precio.textContent = "Precio de oferta: $55";
    marca.style.color = "blue";
};
