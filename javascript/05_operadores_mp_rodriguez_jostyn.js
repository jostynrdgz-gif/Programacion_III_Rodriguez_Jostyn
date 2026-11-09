// 05: Operadores en una compra de FOUNDSHOEZ.
const precioUnitario = 75;
const cantidad = 2;
const descuentoPorcentaje = 10;
const stock = 12;

const subtotal = precioUnitario * cantidad; // Multiplicación.
const descuento = subtotal * descuentoPorcentaje / 100; // Descuento.
const total = subtotal - descuento; // Resta.
const alcanzaStock = cantidad <= stock; // Comparación.
const compraValida = cantidad > 0 && alcanzaStock; // Operador lógico AND.

console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Descuento: $" + descuento.toFixed(2));
console.log("Total: $" + total.toFixed(2));
console.log("¿Hay suficiente stock?", alcanzaStock);
console.log("¿Compra válida?", compraValida);
