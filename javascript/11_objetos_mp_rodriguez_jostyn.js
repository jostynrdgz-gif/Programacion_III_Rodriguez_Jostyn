console.log("FOUNDSHOEZ: objetos en JavaScript");

let zapatilla = {
    nombre: "Knu Skool",
    marca: "Vans",
    talla: 40,
    precio: 85,
    stock: 12,
    disponible: true
};

console.log("Producto registrado:");
console.log(zapatilla);

console.log("--------------------");
console.log("Agregar nuevas propiedades");

zapatilla.color = "Negro y blanco";
zapatilla["categoria"] = "Skate";

console.log("Color: " + zapatilla.color);
console.log("Categoría: " + zapatilla["categoria"]);

console.log("--------------------");

console.log("Actualizar la información del producto");

zapatilla.precio = 79.99;
zapatilla["stock"] = 10;
zapatilla.disponible = zapatilla.stock > 0;

console.log("Precio actualizado: $" + zapatilla.precio.toFixed(2));
console.log("Stock actualizado: " + zapatilla.stock);
console.log(
    "Estado: " + (zapatilla.disponible ? "Disponible" : "Agotado")
);

console.log("--------------------");

console.log("Eliminar la propiedad categoría");

delete zapatilla.categoria;

console.log("Información actualizada:");
console.log(zapatilla);

console.log("--------------------");

console.log("Detalles del producto");

for (let propiedad in zapatilla) {
    console.log(propiedad + ": " + zapatilla[propiedad]);
}

console.log("--------------------");

let inventario = {
    vans: 12,
    nike: 8,
    adidas: 10,
    converse: 6
};

let totalPares = 0;

for (let marca in inventario) {
    console.log(marca + ": " + inventario[marca] + " pares");
    totalPares += inventario[marca];
}

console.log("Total de pares en FOUNDSHOEZ: " + totalPares);