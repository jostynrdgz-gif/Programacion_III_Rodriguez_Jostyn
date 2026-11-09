// Ejercicio 03: servidor HTTP básico con Node.js.
// Ejecutar en la terminal: node 03_server.js
const http = require("node:http");
const puerto = 3000;
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("¡Hola! Este es mi servidor con Node.js.\n");
});
servidor.listen(puerto, () => {
  console.log(`Servidor en http://localhost:${puerto}`);
});
