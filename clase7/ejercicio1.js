//Ejercicio 1: Servidor de Eco 
// Consigna: Crea un servidor TCP que actúe como un servidor de eco. 
// Cuando un cliente se conecte, el servidor debe recibir los datos enviados por el cliente y devolverlos exactamente igual (hacer un "eco"). 
// Además, el servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos. 
// Requisitos: 
// • Usa el evento connection para detectar nuevas conexiones. 
// • Usa el evento data para recibir datos del cliente. 
// • Usa el método socket.write() para enviar los datos de vuelta al cliente. 
// • Usa los eventos end y close para manejar la desconexión del cliente. 

// Paso 1 importacion del net
const net = require ('net')

// Paso 2 creacion del servidor TCP

const server = net.createServer(socket) => {
    console.log('El cliente se conecto al servidor')

    socket.on('data', (data) => {
        console.log('Datos del cliente recibidos: ${data.toString()}');
        socket.write
    })
}