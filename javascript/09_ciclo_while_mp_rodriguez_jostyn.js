// 09: Usar un while para controlar el inventario FOUNDSHOEZ.
let stock = 4; // Pares disponibles.
let venta = 1;

console.log("=== VENTAS DE CHUNKY RETRO ===");
while (stock > 0) {
  console.log("Venta " + venta + ": se vendió un par.");
  stock--; // Restamos 1 al inventario.
  venta++; // Contamos la siguiente venta.
  console.log("Pares restantes: " + stock);
}
console.log("Producto agotado. Se debe reabastecer el inventario.");
