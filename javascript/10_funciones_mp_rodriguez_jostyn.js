console.log("FOUNDSHOEZ: funciones en JavaScript");

function abrirTienda() {
    console.log("FOUNDSHOEZ está abierta. ¡Encuentra tu próximo par!");
}

abrirTienda();

console.log("--------------------");

function saludarCliente(nombre) {
    console.log("Bienvenido, " + nombre + ", a FOUNDSHOEZ.");
}

saludarCliente("Jostyn");
saludarCliente("Carlos");

console.log("--------------------");

function reponerStock(stockActual, cantidad) {
    let stockTotal = stockActual + cantidad;

    if (stockTotal > 100) {
        stockTotal = 100;
    }

    console.log("Stock actualizado: " + stockTotal + " pares.");
    return stockTotal;
}

let stockZapatillas = 50;
stockZapatillas = reponerStock(stockZapatillas, 30);
stockZapatillas = reponerStock(stockZapatillas, 40);

console.log("--------------------");

function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(
    precioOriginal,
    porcentajeDescuento
);

console.log("Precio original: $" + precioOriginal.toFixed(2));
console.log("Descuento: " + porcentajeDescuento + "%");
console.log("Precio final: $" + precioConDescuento.toFixed(2));

console.log("--------------------");

function calcularTotal(precios) {
    let total = 0;

    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }

    return total;
}

let preciosCompra = [60, 80, 45, 35];
let totalCompra = calcularTotal(preciosCompra);

console.log("Total de la compra: $" + totalCompra.toFixed(2));

console.log("--------------------");

function contarPedidosDestacados(pedidos) {
    let cantidadDestacados = 0;

    for (let i = 0; i < pedidos.length; i++) {
        let totalPedido = calcularTotal(pedidos[i]);

        if (totalPedido > 100) {
            cantidadDestacados++;
        }
    }

    return cantidadDestacados;
}

let listadoPedidos = [
    [60, 30],
    [80, 45, 20],
    [70, 50],
    [25, 15]
];

let totalDestacados = contarPedidosDestacados(listadoPedidos);

console.log("Pedidos que superan los $100: " + totalDestacados);