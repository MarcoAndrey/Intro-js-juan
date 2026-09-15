// Promises en Js

const usuarioAautenticado = new Promise((resolve, reject) => {
  const auth = false;

  if (auth) {
    resolve("Usuario autenticado");
  } else {
    reject("No se pudo iniciar sesión");
  }
});

usuarioAautenticado
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

console.log(usuarioAautenticado);

// En los Promises existen tres estados:
// 1. Pending: Estado inicial, no se ha cumplido ni rechazado.
// 2. Fulfilled: Operación completada con éxito.
// 3. Rejected: Operación fallida.
