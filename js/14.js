// Unir dos objetos con el Spread Operator

const producto = {
  nombreProducto: "Monitor HD",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

const nuevoProducto = { ...producto, ...medidas }; // esta es la forma de unir se agrega ... (trespuntos y luego la variable) y para agregar el otro se agrega la , (coma)

console.log(producto);
console.log(nuevoProducto);
