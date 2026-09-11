// Metodos para los Arrays

// Desventajas de estos metodos es que modifica el arreglo original es es una falla ahora se esta trabajando en mejores practicas utilizando Rest Operator o spread Operator

const numeros = [10, 20, 30, 40, 50];
numeros.push(60, 70, 80); // ya se esta dejando de utilizar, -- la desventaja se recomienda no modificar los arreglos o datos originales // agrega al final del arreglo
numeros.unshift(-10, -20, -30); // Agrega al inicio del arreglo
numeros.pop(); // Elimina el primerl elemento del final de un arreglo
numeros.shift(); // Elimina el primer elemento del inicio de un arreglo
numeros.splice(4, 1); // Elimina el elemento, toma dos valores el elemento y la cantidad
console.table(numeros);
// -----------------------------------------------------------------

const meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

console.table(meses1);

// Rest Operator o spread Operator la mejor forma de agregar un arregrlo

const nuevoArreglo1 = [...meses1, "Junio"]; // Agrega el elemento al final
const nuevoArreglo2 = ["Julio", ...meses1]; // Agrega el elemento al inicio

console.table(nuevoArreglo1);
console.table(nuevoArreglo2);
