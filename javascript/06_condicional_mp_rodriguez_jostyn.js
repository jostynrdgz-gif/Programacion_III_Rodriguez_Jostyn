// 06: Condicionales para descuentos en FOUNDSHOEZ.
const totalCompra = 125;
let descuentoPorcentaje;

if (totalCompra >= 150) {
  descuentoPorcentaje = 15;
} else if (totalCompra >= 100) {
  descuentoPorcentaje = 10;
} else {
  descuentoPorcentaje = 0;
}

const descuento = totalCompra * descuentoPorcentaje / 100;
const totalPagar = totalCompra - descuento;

console.log("Compra original: $" + totalCompra.toFixed(2));
console.log("Descuento aplicado: " + descuentoPorcentaje + "%");
console.log("Total a pagar: $" + totalPagar.toFixed(2));
