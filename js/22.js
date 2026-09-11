// Metodos de propiedad

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function () {
    console.log(`Pausando......`);
  },
  crearPlayList: function (nombre) {
    console.log(`Creando playlist: ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`Reproduciendo playlist: ${nombre}`);
  },
};

// Este es un ejemplo de cómo agregar un método a un objeto existente en JavaScript. En este caso, se agrega el método `borrarCancion` al objeto `reproductor`. Este método toma un parámetro `id` y muestra un mensaje en la consola indicando que se está borrando la canción con ese id.

reproductor.borrarCancion = function (id) {
  console.log(`Borrando canción con el id ${id}`);
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlayList("Mi Playlist");
reproductor.reproducirPlayList("Mi Playlist");
reproductor.borrarCancion(30);
