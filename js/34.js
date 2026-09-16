// Async / Await  desarrollo moderno

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("descargando clientes....");

    setTimeout(() => {
      resolve("Los Clientes fueron descargados ");
    }, 5000);
  });
}

// esto seria en la vida real

async function app() {
  try {
    const resultado = await descargarNuevosClientes();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

// async function app() {
//   console.log("app lista...");
// }

app();

// tiempo que se mostrara en consola set timeout 5000 son 5 segundos
// setTimeout(function () {
//   console.log("set timeout....");
// }, 5000);

// setInterval se mostrara en intervalos de 5 segundos
// setInterval(function () {
//   console.log("set timeout....");
// }, 3000);
