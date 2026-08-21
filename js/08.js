// Concatenacion Strings

const nombre = "Marco";
const email = "Marco.andrey1208@gmail.com";

console.log(nombre + email); // los une pero todo pegado MarcoMarco.andrey1208@gmail.com
console.log(nombre + " " + email); // los une ya con espacio Marco Marco.andrey1208@gmail.com
console.log("Nombre cliente:" + " " + nombre + " " + "Email:" + " " + email); // forma antigua de concatenar Nombre cliente: Marco Email: Marco.andrey1208@gmail.com

// Template strings - strings literals
console.log(`Nombre Cliente: ${nombre} Email: ${email}`); // forma nueva de concatenar Nombre cliente: Marco Email: Marco.andrey1208@gmail.com la mejor
