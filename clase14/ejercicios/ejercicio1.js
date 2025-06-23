//Ejercicio 1: Cálculo de Hash Simple
//Escribe un script en Node.js que use el módulo crypto para generar un 
// hash SHA-256 de un texto ingresado por el usuario. 
// Muestra el hash en la consola.

const crypto = require('crypto');
const readlineSync = require('readline-sync');

//solicitar texto al usuario
const texto = readlineSync.question('Ingrese texto para hacer hash: ');

//generar el hash SHA-256
const hash = crypto.createHash('sha-256').update(texto).digest('hex');

//mmostrar hash
console.log('Hash SHA-256:', hash);
