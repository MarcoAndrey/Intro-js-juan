// Funciones con parametros y argumentos

// Declaracion de funcion

function sumar1(numero1, numero2) {
  // los parametros son los que estan en el corchete (numero1, numero2)
  console.log(numero1 + numero2);
}

sumar1(10, 10); // argumentos o los valores reales
sumar1(5, 5);
sumar1(3, 3);
sumar1(2, 2);
sumar1(4, 4);

// Exprecion de la funcion

const sumar2 = function (n1, n2) {
  console.log(n1 * n2);
};

sumar2(2, 1);

// parametros por default se ejecutan o son llamados cuando no esten presente los argumentos

function sumar1(num1 = 0, num2 = 0) {
  // los parametros son los que estan en el corchete (numero1, numero2)
  console.log(num1 + num2);
}

sumar1(10); // argumentos o los valores reales
sumar1(5, 5);
sumar1(3, 3);
sumar1(2, 2);
sumar1();
