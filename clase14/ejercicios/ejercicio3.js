//Ejercicio 3: Hash de Contraseña con Salt
//Crea un script en Node.js que permita al usuario ingresar una contraseña y un "salt" (un valor aleatorio que se usa para añadir seguridad). 
//Luego, genera un hash de la contraseña combinada con el "salt" usando el algoritmo SHA-256. Muestra el hash generado.

const crypto = require('crypto');

const readlineSync = require('readline-sync');

const password = readlineSync.question('Ingresa una contrasenia: ');

const salt = readlineSync.question('Ingresa una salt (valor aleatorio): ');

const hash = crypto.createHash('sha256').update(password + salt).digest('hex');

//mostrar resultado
console.log('Hash de la contraseña +salt: ', hash);



