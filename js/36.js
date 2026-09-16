// Fetch API

// function obtenerEmpleados() {}

// const archivo = "empleados.json";

// // fetch(archivo).then((resultado) => {
// //   return resultado.json();
// // });

// // Utilizando destroction
// //   .then((datos) => {
// //     const { empleados } = datos;
// //     console.log(empleados);
// //   });

// // Utilizando foreach
// //   .then((datos) => {
// //     const { empleados } = datos;
// //     empleados.forEach((empleado) => {
// //       console.log(empleado);
// //     });
// //   });

// obtenerEmpleados();

// Mejor forma y corta Async y Await

async function obtenerEmpleados() {
  const archivo = "empleados.json";

  const resultado = await fetch(archivo);
  const datos = await resultado.json();
  console.log(datos);
}

obtenerEmpleados();
