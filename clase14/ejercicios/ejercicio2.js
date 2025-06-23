//Ejercicio 2: Ordenar una Lista de Números
//Crea un script en Node.js que permita al usuario ingresar una lista de números
//separados por comas. Ordena los números de menor a mayor y muestra la lista ordenada.


const readlineSync = require('readline-sync');


//solicitar numeros al usuario
const entrada  = readlineSync.question('Ingrese los numeros separados por comas: ');


let numeros = entrada.split(',').map(n =>
    parseFloat(n.trim()));

//ordenar de menor a mayor
numeros.sort((a,b) => a-b);

//mostrar resultado
console.log('Lista ordenada: ', numeros);

