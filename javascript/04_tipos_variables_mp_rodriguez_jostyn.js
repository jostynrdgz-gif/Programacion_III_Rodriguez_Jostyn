// 04: Tipos de datos usados en el inventario de FOUNDSHOEZ.
const nombreProducto = "Skate Classic"; // string (texto)
const precio = 68.50; // number (número)
const disponible = true; // boolean (verdadero/falso)
const tallas = [38, 39, 40, 41, 42]; // array (lista)
const producto = { marca: "FOUNDSHOEZ", color: "Negro", stock: 8 }; // object
let fechaReposicion = null; // null: todavía no hay fecha
let codigoPromocion; // undefined: aún sin valor

console.log("Nombre:", nombreProducto, typeof nombreProducto);
console.log("Precio:", precio, typeof precio);
console.log("Disponible:", disponible, typeof disponible);
console.log("Tallas:", tallas, "¿es arreglo?", Array.isArray(tallas));
console.log("Producto:", producto, typeof producto);
console.log("Fecha de reposición:", fechaReposicion);
console.log("Código de promoción:", codigoPromocion);
