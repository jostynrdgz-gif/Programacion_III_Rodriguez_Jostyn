// Ejercicio 04: tipos de datos de JavaScript.
const texto = "Hola";                // string
const edad = 19;                     // number
const estudiante = true;             // boolean
const sinValor = null;               // null
let pendiente;                       // undefined
const materias = ["JavaScript", "BD"]; // array (object)
const persona = { nombre: "Jostyn" }; // object
console.log("Texto:", texto, typeof texto);
console.log("Edad:", edad, typeof edad);
console.log("Estudiante:", estudiante, typeof estudiante);
console.log("Nulo:", sinValor, typeof sinValor); // peculiaridad de JS: 'object'
console.log("Indefinido:", pendiente, typeof pendiente);
console.log("Array:", materias, Array.isArray(materias));
console.log("Objeto:", persona, typeof persona);
