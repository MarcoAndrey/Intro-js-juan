// Switch

const metodoPago = "tarjeta";

switch (metodoPago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;

  case "efectivo":
    console.log("Pagaste con efectivo");
    break;

  default:
    console.log("Aun no has seleccionado un metodo de pago");
    break;
}
