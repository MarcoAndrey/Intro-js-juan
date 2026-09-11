// Arreglos / Arrays

const numeros = [10, 20, 30, 40, 50];

console.table(numeros); // mejor forma para verlos en tabla

// constructor casi no es muy utilizado

const meses = new Array("enero", "febrero", "marzo", "abril");

console.table(meses);

// Mas utilizado

const meses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

console.table(meses1);

// Acceder a los valores de un arrelgo
console.log(numeros[2]);
console.log(numeros[4]);
console.log(numeros[200]);

// Conocer la extencion de un arreglo
console.log(meses1.length);

// Iteracion con forEach
meses1.forEach(function (meses1) {
  console.log(meses1);
});
