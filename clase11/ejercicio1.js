//Ejercicio 1: Uso Básico de readline-sync
//Crea un script en Node.js que utilice el módulo readline-sync para solicitar al usuario que ingrese su nombre y edad. 
// Luego, muestra un mensaje de saludo personalizado que incluya el nombre y la edad del usuario.

const readLineSync = require ('readline-sync')

const nombre = readLineSync.question('Ingresa tuu nombre: ')

const edad = readLineSync.question('Ingresa tu edad: ')

console.log(`Hola soy ${nombre}, y mi edad es ${edad}`)



