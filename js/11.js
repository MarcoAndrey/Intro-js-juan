// Modificar Objetos

const producto = {
  nombreProducto: "Monitor HD",
  precio: 300,
  disponible: true,
};

producto.imagen = "Imagen.jpg"; // agrega una propiedad o objeto
delete producto.disponible; // eliminar propiedades o objeto

console.log(producto);
console.log(typeof producto);
