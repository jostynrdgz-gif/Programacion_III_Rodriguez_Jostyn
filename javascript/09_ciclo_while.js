// Ejercicio 09: contar del 1 al 10 con while.
let contador = 1;
while (contador <= 10) {
  console.log("Número:", contador);
  contador++; // Evita que el ciclo sea infinito.
}
// Ejercicio adicional: sumar los números del 1 al 5.
let numero = 1;
let suma = 0;
while (numero <= 5) {
  suma += numero;
  numero++;
}
console.log("Suma del 1 al 5:", suma);
