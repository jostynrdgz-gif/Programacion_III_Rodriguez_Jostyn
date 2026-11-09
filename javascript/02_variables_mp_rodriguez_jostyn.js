// 02: Variables de productos de la zapatería FOUNDSHOEZ.
const nombreTienda = "FOUNDSHOEZ"; // No cambia.
let nombreProducto = "Zapatillas Chunky 2000";
let precio = 75;
let stock = 12;

console.log("Tienda:", nombreTienda);
console.log("Producto:", nombreProducto);
console.log("Precio: $" + precio);
console.log("Unidades disponibles:", stock);

// Simulamos la venta de un par de zapatillas.
stock = stock - 1;
console.log("Stock después de una venta:", stock);
