//Ejercicio 1: 
// Conectar y enviar un mensaje al servidor Consigna Crea un cliente TCP que: 
// 1. Se conecte a un servidor en localhost:5000. 
// 2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola, servidor!". 
// 3. Escuche los datos recibidos y los muestre en consola. 
// Pistas 
// • Usa net.createConnection() para conectar al servidor. 
// • Maneja el evento 'connect' para saber cuándo la conexión está lista. 
// • Usa client.write() para enviar el mensaje. 
// • Captura los datos con el evento 'data'. 

// Ejercicio 6: Cliente interactivo con la usuaria

const readline = require('readline').createInterface({

    input: process.stdin,

    output: process.stdout

});

function enviarMensaje() {

    readline.question('Escribe un mensaje: ', (msg) => {

        if (msg === 'salir') {

            client.end();

            readline.close();

        } else {

            client.write(msg);

            enviarMensaje();

        }

    });

}

client.on('connect', enviarMensaje);