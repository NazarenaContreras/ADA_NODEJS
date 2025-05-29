//Ejercicio 2: Servidor con Timeout 
// Consigna: 
// Crea un servidor TCP que cierre automáticamente la conexión con un cliente si no recibe datos en un período de 10 segundos. 
// Si el cliente envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar el contador de tiempo. 
// Requisitos: 
// • Usa el método socket.setTimeout() para establecer un tiempo de espera. 
// • Usa el evento timeout para cerrar la conexión si se alcanza el tiempo límite. 
// • Usa el evento data para reiniciar el contador de tiempo cada vez que se reciben datos. 

//importamos el modulo net

const net = require('net')

//crear el servidor TCP

const server = net.createServer((socket) => {
    console.log('Conexion establecida con el cliente')

    socket.setTimeout(10000);
    socket.on('timeout', () => {
        console.log('El tiempo de espera finalizo.')
        socket.end();
    })

    socket.on('data', (data) => {
        console.log(`Datos del cliente recibidos: ${data.toString()}`);
        socket.setTimeout(10000); //reinicia el timeout

    });

})

const PORT = 4000

server.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`)

})

server.on('listenig', () => {
    console.log('El servidor esta listo para recibir coneiones')

})
