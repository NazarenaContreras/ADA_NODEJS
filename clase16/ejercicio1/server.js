const path = require('path')
const fs = require('fs')
const net = require('net')

// definimos la ruta donde estaran alojados los mensajes
const rutaMensajes = path.join(__dirname, 'mensajes.json')

// verificamos si el archivo mensajes.json existe, si no, 
// lo creamos con array vacio dentro
if (!fs.existsSync(rutaMensajes)) {
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8')
}

// creamos el servidor
const server = net.createServer((socket) => {
    console.log('Cliente se conecto');

    // manejar los datos recibidos por el cliente
    socket.on('data', (data) => {
        // definimos el mensaje y que pase de buffer a string y eliminamos los espacios
        const mensaje = data.toString().trim()

        // si el mensaje recibido es /historial, enviamos todos los mensajes almacenados
        if (mensaje === '/historial') {
            // leemos el contenido del archivo mensajes.json
            const historial = fs.readFileSync(rutaMensajes, 'utf-8')

            // enviamos el contenido al cliente
            socket.write(`Historial de mensajes: \n${historial}\n`)
        } else {
            // si no es /historial, se trata entonces de un mensaje nuevo

            // leemos el archivo json y lo convertimos en un array de objetos
            const mensajesNuevos = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8' || '[]'))

            // agregamos el nuevo mensaje con la fecha y hora actual
            mensajesNuevos.push({ fecha: new Date().toISOString(), mensaje })

            //guardamos el array modificado
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajesNuevos, null, 2), 'utf-8')

            // enviar un mensaje de confirmacion al cliente
            socket.write('Mensaje guardado correctamente.\n')
        }
    })
    // manejamos la deconexion del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    })
})

// iniciar el servidor
server.listen(3000, () => {
    console.log('Servidor TCP escuchando en el puerto 3000');
})