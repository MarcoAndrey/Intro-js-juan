// This es un objeto literal hace referencia a un objeto que tiene propiedades y métodos, es decir, funciones dentro de un objeto.

const reservacion = {
  nombre: "Marco",
  apellido: "Andrey",
  total: 5000,
  Pagado: false,
  informacion: function () {
    console.log(
      `El cliente ${this.nombre} ${this.apellido} tiene un total de: ${this.total} y su reservación está pagada: ${this.Pagado}`,
    );
  },
};
reservacion.informacion();
