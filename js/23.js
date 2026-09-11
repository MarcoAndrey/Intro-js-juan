// Arrow functions o funciones de flecha

// sintaxis de arrow functions:

const nombreFuncion = (param1, param2) => {};

// Funciones

const sumar1 = function (n1, n2) {
  console.log(n1 + n2);
};

// Arrow functions

const sumar2 = (n1, n2) => {
  console.log(n1 + n2);
};

// cuando se tiene un solo parámetro, se puede omitir los paréntesis:

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

sumar1(5, 5);
sumar2(10, 10);
aprendiendo("JavaScript");

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
meses.forEach((mes) => {
  if (mes == "Marzo") {
    console.log("Marzo si existe ");
  }
});

// Some Sirve y es ideal para arreglos de objetos
let resultado1;

resultado1 = carrito.some((producto) => producto.nombre === "Celular");

// Reduce para ver el total del carrito de compras

resultado1 = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter. es muy utilizado

resultado1 = carrito.filter((producto) => producto.precio > 400); // filtrar por precios mayor o menor

resultado1 = carrito.filter((producto) => producto.nombre === "Celular"); // Buscar por nombre

resultado1 = carrito.filter((producto) => producto.nombre !== "Celular"); // Negar o que no sea celular o por el nombre
console.log(resultado1);
