// Async / Await con dos consultas desarrollo moderno

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("descargando clientes....");

    setTimeout(() => {
      resolve("Los Clientes fueron descargados ");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("descargando Pedidos....");

    setTimeout(() => {
      resolve("Los Pedidos fueron descargados ");
    }, 3000);
  });
}

async function app() {
  try {
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}

app();
