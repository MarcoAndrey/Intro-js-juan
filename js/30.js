// POO Classes en JavaScript programacion orientada a objetos

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
  }

  devolverprecio() {
    return this.precio;
  }
}

const producto1 = new Producto("monitor curvo", 300);
const producto2 = new Producto("tablet", 400);

console.log(producto1);
console.log(producto2);

console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());

// POO Herencia en JavaScript programacion orientada a objetos

class Libro extends Producto {
  constructor(nombre, precio, isbn) {
    super(nombre, precio);
    this.isbn = isbn;
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
  }
}

const libro1 = new Libro("aprendiendo JS", 120, "2320230300320320");

console.log(libro1);
console.log(libro1.formatearProducto());
