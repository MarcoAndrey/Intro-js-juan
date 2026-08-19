// Tipos de datos STRING Cadenas de texto

// La que es muy comun y mas utlizada
const producto1 = "Monitor de 20 pulgadas"; // string o cadenas de texto

// constructor
const producto2 = String("Monitor 30 pulgadas");

// Objetos
const producto3 = new String("Monitor 50 pulgadas");

console.log(producto1);
console.log(producto2);
console.log(producto3);

// ver si es string o objeto con 'typeof' console.log(typeof variable);
console.log(typeof producto1);
console.log(typeof producto2);
console.log(typeof producto3);

// Metodos para los strings

const tweet = "Monitor de 20 pulgadas";
const producto5 = "Monitor HD";

console.log(tweet.length); // (length) Metodo para conocer la extencion o numero de caracteres
console.log(producto5);

// Conocer si una palabra se encuentra en una cadena de texto

// IndexOF

console.log(tweet.indexOf("20")); //palabra buscada (20)

// Include (retorna true o false) es mas moderno

console.log(tweet.includes("20")); //palabra buscada (20).  Muestra True
console.log(tweet.includes("Tablet")); //palabra buscada no esta.  Muestra False
