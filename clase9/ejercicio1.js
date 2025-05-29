//DESAFÍO 1: Cliente con Reconexión Automática
// Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
// El cliente debe: Conectarse al servidor en el puerto 5000. Enviar un mensaje inicial: "¡Hola, servidor!".
// Escuchar el evento 'close' y volver a conectarse tras 3 segundos. Escuchar y manejar 'error', mostrando el mensaje en consola.

const net = require('net')

const client = net.createConnection({PORT:5000}, () => {
    console.log('Conectado al servidor');
    client.write('Hola, servidor!')
} )

client.on('data', (data) => {
    console.log('Mensae recibido: ', data.toString());
})

client.on(('end', () => {
    console.log('El servidor se cerro.');
}))

client.on(('error', (err) => {
    console.log('Error: ', err.message);
}))

client.on(('close', () => {
    console.log('El servidor fue cerrado.');
}))

client.setTimeout(3000, () => {
    console.log('El tiempo se acabo, intenta nuevamente.')
    client.end()
})

setTimeout(() => {
    
})

