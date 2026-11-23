let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("boton");
let total = document.getElementById("total");
let precio = 60;

boton.onclick = function () {
    let pares = Number(cantidad.value);

    if (pares > 0 && pares % 1 == 0 && isFinite(pares)) {
        let pago = pares * precio;
        total.textContent = "Total a pagar en FOUDSHOEZ: $" + pago;
    } else {
        total.textContent = "Ingresa una cantidad entera mayor que cero.";
    }
};
