// Crear un Servidor TCP con Persistencia de Datos 
// Consigna: Crea un servidor TCP que reciba mensajes de los clientes y los guarde en un archivo JSON. 
// Luego, permite a los clientes consultar todos los mensajes almacenados. 

// importacion del modulo net
const net = require('net')

// creacion del cliente
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');
    client.write('Hola Servidor!\n')
})

// eventos
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
})

client.on('end', () => {
    console.log('Desconectado del servidor');
})
