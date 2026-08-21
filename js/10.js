// Objetos

const nombreProducto = "Monitor HD";
const precio = 300;
const disponible = true;

// La Mejor forma es

const producto = {
  nombreProducto: "Monitor HD",
  precio: 300,
  disponible: true,
};

console.log(producto);
console.log(typeof producto);

// Sintaxis de punto .
// Acceder a los objetos, es con un punto, esto sirve para acceder a los objetos

console.log(producto.precio);
console.log(producto.nombreProducto);

// Otra forma muy poco comun

console.log(producto["precio"]);
