// Destructuring de Objetos

const producto = {
  nombreProducto: "Monitor HD",
  precio: 300,
  disponible: true,
};

// Forma anterior tocaba crear bariable y luego poner el valor

const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring de Objetos Nueva forma. Crea la variable y extrae el valor en un solo paso

const { precio } = producto;

console.log(precio);
