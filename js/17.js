// Arrays Methods

// Arreglo plano. Arrays
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// Arreglo de Objetos. Arrays

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

// forEach
meses.forEach(function (mes) {
  if (mes == "Marzo") {
    console.log("Marzo si existe ");
  }
});

// Includes sirve mucho para Areglos planos

const resultado = meses.includes("Marzo");
console.log(resultado);

// Some Sirve y es ideal para arreglos de objetos

let resultado1 = carrito.some(function (producto) {
  return producto.nombre === "Celular";
});

// Reduce para ver el total del carrito de compras

resultado1 = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

// Filter. es muy utilizado

resultado1 = carrito.filter(function (producto) {
  return producto.precio > 400; // filtrar por precios mayor o menor
});

resultado1 = carrito.filter(function (producto) {
  return producto.nombre === "Celular"; // Buscar por nombre
});

resultado1 = carrito.filter(function (producto) {
  return producto.nombre !== "Celular"; // Negar o que no sea celular o por el nombre
});
console.log(resultado1);
