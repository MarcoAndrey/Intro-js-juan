// Object Methods

"use strict"; // Correr Js modo Estricto

const producto = {
  nombreProducto: "Monitor HD",
  precio: 300,
  disponible: true,
};

Object.freeze(producto); // No permite agregar nuevas propiedades a los Objetos y tampoco deja eliminarlas y no permite modificarlos

Object.seal(producto); // No permite agregar nuevas propiedades a los Objetos y tampoco deja eliminarlas // pero si te permite modificar los existentes

producto.imagen = "imagen.jpg";
producto.precio = "Nuevo precio"; // Object.seal(producto); .seal permite modificarpropiedades ya existentes

console.log(Object.isFrozen(producto));
console.log(Object.seal(producto));

console.log(producto);
