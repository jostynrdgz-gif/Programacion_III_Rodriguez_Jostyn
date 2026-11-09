// 01: Conectar un archivo JavaScript a la página de FOUNDSHOEZ.
const botonProducto = document.getElementById("botonProducto");
const mensaje = document.getElementById("mensaje");

botonProducto.addEventListener("click", () => {
  mensaje.textContent = "¡Disponible! Zapatillas chunky retro en talla 40.";
  console.log("FOUNDSHOEZ: se consultó la disponibilidad del producto.");
});
