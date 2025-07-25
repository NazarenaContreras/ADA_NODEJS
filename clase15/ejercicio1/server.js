//Objetivo:
//Crear un servidor TCP que asigne un UUID v4 único a cada conexión y envíe el UUID de vuelta al cliente.

// Importamos los módulos necesarios

const net = require('net');

const { v4: uuidv4 } = require('uuid');

// Creamos el servidor TCP

const server = net.createServer((socket) => {

    // Generamos un UUID v4 único para la conexión

    const connectionId = uuidv4();

    // Enviamos el UUID al cliente

    socket.write(`Tu UUID es: ${connectionId}`);

    // Manejamos el evento 'end' cuando la conexión se cierra

    socket.on('end', () => {

        console.log(`Conexión con ID ${connectionId} finalizada`);

    });

});

// El servidor escucha en el puerto 8080

server.listen(8080, () => {

    console.log('Servidor TCP escuchando en el puerto 8080');

});