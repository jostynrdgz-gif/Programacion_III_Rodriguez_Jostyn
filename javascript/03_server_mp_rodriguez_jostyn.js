// 03: Servidor básico Node.js para consultar productos de FOUNDSHOEZ.
// Ejecutar: node 03_server_mp_rodriguez_jostyn.js
// Abrir: http://localhost:3000 o http://localhost:3000/productos
const http = require("node:http");

const productos = [
  { id: 1, nombre: "Chunky Retro 2000", precio: 75, stock: 12 },
  { id: 2, nombre: "Skate Classic", precio: 68, stock: 8 },
  { id: 3, nombre: "Urban Runner", precio: 82, stock: 5 }
];

const servidor = http.createServer((req, res) => {
  if (req.url === "/productos") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(productos));
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end('<h1>FOUNDSHOEZ</h1><p>Bienvenido al servidor de la zapatería.</p><a href="/productos">Ver productos</a>');
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Ruta no encontrada");
  }
});

servidor.listen(3000, () => console.log("FOUNDSHOEZ: http://localhost:3000"));
