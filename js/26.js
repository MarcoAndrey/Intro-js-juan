// Iteradores for loop

// un for loop va ir ejecutando un codigo mientras una condicion sea evaluada como verdadera, y deja de ejecutar ese codigo cuando esa condicion se deja de cumplir, for solo se puede usar una ves

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Una pregunta que le hacen muchos desarrolladores Junior es del uno al 100 si el número actual es par o es impar ahí ya tendríamos que utilizar

// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`El número ${i} es par`);
//   } else {
//     console.log(`El número ${i} es impar`);
//   }
//   console.log(i);
// }

// Uso en el mundo real de un for loop

const carrito = [
  { nombre: "TV 20 pulgadas", precio: 500 },
  { nombre: "TV 70 pulgadas", precio: 700 },
  { nombre: "Celular", precio: 50 },
  { nombre: "Parlante", precio: 20 },
  { nombre: "Audifonos", precio: 60 },
  { nombre: "Teclado", precio: 800 },
  { nombre: "laptop", precio: 1500 },
  { nombre: "tablet", precio: 400 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

// While loop se ejecuta mientras la condicion sea verdadera, es decir que si la condicion no se cumple no se ejecuta el codigo

// let i = 0; // indice

// while (i < 10) {
//   // condicion
//   console.log(`Número: ${i}`); // codigo a ejecutar
//   i++; // incremento
// }

// Do while loop  se ejecuta al menos una vez y luego evalua la condicion, es decir que si la condicion no se cumple se ejecuta una vez y luego deja de ejecutarse

let i = 0; // indice
do {
  // codigo a ejecutar
  console.log(`Número: ${i}`);
  i++; // incremento
} while (i < 10); // condicion
