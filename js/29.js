// Object constructor y object literal y prototypes en JavaScript
// Programación orientada a objetos (POO) es un paradigma de programación que utiliza "objetos" para modelar datos y funcionalidades. En JavaScript, podemos crear objetos utilizando dos enfoques principales: el objeto literal y el constructor de objetos.

// object literal: Es una forma de crear objetos directamente utilizando llaves {}. Los objetos literales son útiles para crear instancias únicas y no requieren una función constructora. Por ejemplo:
const persona = {
  nombre: "Marco",
  edad: 30,
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  },
};

persona.saludar(); // Llama al método saludar del objeto persona

// Object constructor: Es una función que se utiliza para crear múltiples instancias de un objeto con las mismas propiedades y métodos. Se define utilizando la palabra clave "function" y se utiliza la palabra clave "new" para crear nuevas instancias. Por ejemplo:

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Luis", 28);

persona1.saludar(); // Llama al método saludar del objeto persona1
persona2.saludar(); // Llama al método saludar del objeto persona2

// En resumen, los objetos literales son útiles para crear instancias únicas, mientras que los constructores de objetos permiten crear múltiples instancias con las mismas propiedades y métodos. Ambos enfoques son fundamentales en la programación orientada a objetos en JavaScript.

// Object constructor:

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

// prototypes : crear funciones que solo se utilizan en el objeto constructor, para no repetir código y ahorrar memoria.

Producto.prototype.formatearProducto = function () {
  return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
};

function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

// prototypes : crear funciones que solo se utilizan en el objeto constructor, para no repetir código y ahorrar memoria.

Cliente.prototype.formatearCliente = function () {
  return `El cliente ${this.nombre} ${this.apellido} ha realizado una compra.`;
};

const producto1 = new Producto("monitor curvo", 300, true);
const producto2 = new Producto("tablet", 400, false);
const producto3 = new Producto("laptop", 600, true);
const cliente1 = new Cliente("Marco", "Andrey");

console.log(cliente1);
console.log(producto1);
console.log(producto2);
console.log(producto3);

// mensaje

console.log(cliente1.formatearCliente());
console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
