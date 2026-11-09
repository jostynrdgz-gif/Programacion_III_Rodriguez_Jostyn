// 08: Usar un for para mostrar los productos de FOUNDSHOEZ.
const productos = [
  { nombre: "Chunky Retro 2000", precio: 75 },
  { nombre: "Skate Classic", precio: 68 },
  { nombre: "Urban Runner", precio: 82 }
];

console.log("=== CATÁLOGO FOUNDSHOEZ ===");
for (let i = 0; i < productos.length; i++) {
  console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
}
