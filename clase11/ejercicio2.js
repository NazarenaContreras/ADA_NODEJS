//Ejercicio 2: Menú Interactivo con readline-sync
//Crea un script de Node.js que muestre un menú de opciones usando readline-sync. 
// El menú debe permitir al usuario elegir entre tres acciones: ver un mensaje de bienvenida, generar un hash de un texto, o salir.

const rl = require('readline-sync');

let opcion;

do {
    console.log(" \n1. Ver mensaje de bienvenida");
    console.log("2. Monstrar un texto personalizado");
    console.log("3. Salir");

    opcion = rl.question("Elige una opcion: ");

    if (opcion === "1") {
        console.log('Bienvenidas a ADA!');
    } else if (opcion === "2") {
        const teto = rl.question("Escribi un texto y lo mostramos: ");
        console.log("Escribiste: ", texto);
    } else if (opcion !== "3") {
        console.log("Opcion no valida.");
    }
} while (opcion !== "3"):

console.log("Gracias por usar el programa!");







