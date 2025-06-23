// importaciones
const net = require('net')

// importamos controlador
const vehicleController = require('./controllers/vehicleController')

const server = net.createServer((socket) => {
    console.log("Cliente conectado");

    socket.on('data', (data) => {
        const vehicleId = data.toString().trim()
        console.log(`Solicitud recibida: ID ${vehicleId}`)
        const response = vehicleController.handleRequest(vehicleId)
        socket.write(response)
    })

    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
})

server.listen(4000, () => {
    console.log(`Servidor TCP escuchando en el puerto 4000...`);
})
