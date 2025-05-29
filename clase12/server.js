//Ejercicio 1: Servidor TCP que Valida Rutas
//Objetivo: Crear un servidor TCP que acepte comandos desde el cliente para validar si una ruta es absoluta o relativa, y responder con la información correspondiente.

const net = require("net");
const path = require("path");

const server = net.createServer((socket) => {
    console.log("Cliente conetado");

    socket.on("data", (data) => {
        const ruta = data.toString();
        const esAbsoluta = path.isAbsolute(ruta);
        const respuesta = esAbsoluta? "La ruta es absoluta." : "La ruta es relativa.";

        console.log(`Ruta recibida: ${ruta} - ${respuesta}`);
        socket.write(respuesta);
    });

    socket.on("end", () => {
        console.log("Cliente desconectado");
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});




//const net = require('net');

// Conectar al servidor en el puerto 8080

// const client = net.createConnection({ port: 8080 }, () => {

//     console.log('Conectado al servidor');

//     // Enviar varias rutas como comandos

//     client.write('/home/user/documento.txt'); // Comando 1: Ruta absoluta

//     client.write('documento.txt'); // Comando 2: Ruta relativa

//     client.write('/another/path/to/file'); // Comando 3: Otra ruta absoluta

// });

// // Leer la respuesta del servidor

// client.on('data', (data) => {

//     console.log(data.toString());

//     client.end(); // Terminar la conexión después de recibir la respuesta

// });

// client.on('end', () => {

//     console.log('Desconectado del servidor');

// });