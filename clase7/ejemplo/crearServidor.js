// Paso 1: Importacion modulo net
const net = require('net')

// Paso 2: Creamos un servidor TCP 
const server = net.createServer((socket) => {
    console.log("Un cliente se conecto al servidor!");

    // Paso 3: evento data
    socket.on('data', (data) => {
        console.log(Datos recibidos del cliente: ${data.toString()});
        // podemos responderle al cliente
        socket.write('Mensaje recibido por el servidor')
    })

    // Paso 4: evento end
    socket.on('end', () => {
        console.log('El cliente ha cerrado la conexion');
    })

    // Paso 5: Evento error
    socket.on('error', (err) => {
        console.log(Error de conexion: ${err.message});
    })

    // Paso 6: Evento close.
    socket.on('close', () => {
        console.log('La conexion con el cliente se ha cerrado');
    })
})

// Paso 7: Evento Connection
server.on('connection', (socket) => {
    console.log('Nueva conexion establecida');
})

// Paso 8: Creacion de la constante para el puerto
const PORT = 3000

// Paso 9: 
server.listen(PORT, () => {
    console.log(Servidor esta escuchando en el puerto: ${PORT});
})

server.on('listening', () => {
    console.log('El servidor esta listo para recibir conexiones');
})

server.on('error', (err) => {
    console.log(Error al iniciar el servidor: ${err.message});
})

server.on('close', () => {
    console.log('El servidor se ha cerrado');
})