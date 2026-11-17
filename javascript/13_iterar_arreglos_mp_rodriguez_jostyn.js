console.log("FOUNDSHOEZ: iteración de arreglos");

let existencias = [30, 50, 70, 40];
let posicion = 2;
let nuevoStock = 60;

if (posicion >= 0 && posicion < existencias.length) {
    existencias[posicion] = nuevoStock;
} else {
    console.log("Posición no válida.");
}

console.log("Existencias actualizadas:", existencias);

console.log("--------------------");
let productos = [
    {
        id: 1,
        nombre: "Vans Knu Skool",
        precio: 85,
        talla: 40
    },
    {
        id: 2,
        nombre: "Nike Air Force 1",
        precio: 110,
        talla: 42
    },
    {
        id: 3,
        nombre: "Adidas Campus",
        precio: 95,
        talla: 41
    }
];

for (let producto of productos) {
    console.log("ID:", producto.id);
    console.log("Nombre:", producto.nombre);
    console.log("Precio: $" + producto["precio"].toFixed(2));
    console.log("Talla:", producto.talla);
    console.log("--------------------");
}

console.log("Pedidos de FOUNDSHOEZ");

let pedidos = [
    {
        cliente: "Jostyn",
        precios: [85, 45, 60]
    },
    {
        cliente: "Carlos",
        precios: [110, 30, 25]
    },
    {
        cliente: "Daniel",
        precios: [95, 80, 50]
    }
];

for (let pedido of pedidos) {
    let totalPedido = 0;

    console.log("Cliente:", pedido.cliente);

    for (let precio of pedido.precios) {
        console.log("Producto: $" + precio.toFixed(2));
        totalPedido += precio;
    }

    console.log("Total del pedido: $" + totalPedido.toFixed(2));
    console.log("--------------------");
}

let preciosOriginales = [60, 85, 110, 95];
let preciosConDescuento = preciosOriginales.map(precio => {
    return precio - (precio * 10 / 100);
});

console.log("Precios originales:", preciosOriginales);
console.log("Precios con 10% de descuento:", preciosConDescuento);
let preciosEconomicos = preciosOriginales.filter(precio => {
    return precio <= 85;
});

console.log("Precios de hasta $85:", preciosEconomicos);
let totalPrecios = preciosOriginales.reduce((acumulador, precio) => {
    return acumulador + precio;
}, 0);

console.log("Suma de los precios: $" + totalPrecios.toFixed(2));