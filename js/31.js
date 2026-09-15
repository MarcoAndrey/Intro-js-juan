// Try catch sirve para capturar errores y evitar que el programa se detenga.

const numero1 = 20;
const numero2 = 50;

console.log(numero1);
console.log(numero2);

try {
  console.log(numero3); // Esto genera un error porque numero3 no está definido.
} catch (error) {
  console.log(error);
}
