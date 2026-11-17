console.log("FOUNDSHOEZ: arreglos en JavaScript");

let marcas = [
    "Vans",
    "Nike",
    "Adidas",
    "Converse",
    "Puma",
    "New Balance"
];

console.log("Elemento 0:", marcas[0]);
console.log("Elemento 2:", marcas[2]);
console.log("Elemento 5:", marcas[5]);
console.log("Elemento 4:", marcas[4]);

console.log("Cantidad de marcas:", marcas.length);
console.log("--------------------");
console.log("Agregar una marca al final");
marcas.push("DC Shoes");
console.log("Marcas:", marcas);
console.log("--------------------");
console.log("Agregar una marca al inicio");
marcas.unshift("Reebok");
console.log("Marcas:", marcas);
console.log("--------------------");

console.log("Modificar la primera marca");

marcas[0] = "Asics";

console.log("Marcas:", marcas);

console.log("--------------------");

console.log("Eliminar la última marca");

let marcaEliminada = marcas.pop();

console.log("Marca eliminada:", marcaEliminada);
console.log("Marcas:", marcas);

console.log("--------------------");
console.log("Eliminar la primera marca");

let primeraMarcaEliminada = marcas.shift();

console.log("Marca eliminada:", primeraMarcaEliminada);
console.log("Marcas:", marcas);

console.log("--------------------");
console.log("Eliminar la marca ubicada en el índice 1");

let marcasRetiradas = marcas.splice(1, 1);

console.log("Marca retirada:", marcasRetiradas[0]);
console.log("Marcas disponibles:", marcas);
console.log("Cantidad final de marcas:", marcas.length);