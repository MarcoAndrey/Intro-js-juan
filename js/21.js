// Funciones que retornan valores

// function sumar(n1, n2) {
//   return n1 + n2;
// }
// const resultado = sumar(2, 5);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

function cacularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(300);
total = agregarCarrito(200);
total = agregarCarrito(600);

console.log(total);

const totalApagar = cacularImpuesto(total);

console.log(`El total a pagar con impuestos es de ; $${totalApagar}`);
