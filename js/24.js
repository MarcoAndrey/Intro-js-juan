// Estructuras de control: if, else if y else

// if es una estructura de control que nos permite ejecutar un bloque de código si se cumple una condición. Si la condición no se cumple, podemos usar else if para evaluar otra condición, y else para ejecutar un bloque de código si ninguna de las condiciones anteriores se cumple.

// signo comparacion ==
// Signo comparacion extremo === es el mas recomendable es comparador estricto
// signo diferente !==

// if es si se cumple la condicion se cumple si no se cumple no se ejecuta el codigo
// else si no se cumple la condicion se ejecuta el codigo de else

const puntaje = 100;

if (puntaje === 100) {
  console.log("El puntaje es 100");
} else {
  console.log("El puntaje no es 100");
}

const efectivo = 10;
const totalCarrito = 300;

if (efectivo > totalCarrito) {
  console.log("El usuario puede pagar");
} else {
  console.log("Fondos insuficientes");
}

const rol = "VISITANTE";
if (rol === "ADMINISTRADOR") {
  console.log("Acceso concedido");
} else if (rol === "EDITOR") {
  console.log("Eres editor, tienes acceso limitado");
} else {
  console.log("Acceso denegado");
}
