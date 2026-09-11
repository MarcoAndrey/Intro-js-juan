// forEach y map solo se va ejecutar una ves por cada ves que ahi un elemento en el arreglo

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

// forEach es utilizado unicamente en arreglos, cuando se quiere iterar sobre un arreglo y no se quiere crear un nuevo arreglo y se quiere ver en consola el resultado de cada elemento del arreglo

carrito.forEach((producto) => console.log(producto));

// map es utilizado para crear un nuevo arreglo a partir de otro arreglo

const arreglo2 = carrito.map(
  (producto) => `${producto.nombre} - ${producto.precio}`,
);

console.log(arreglo2);
