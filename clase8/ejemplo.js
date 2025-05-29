//clase 8 codigo

//Hacer un cliente basico:

// Importamos el modulo
const net = require('net')

// Configuracion de conexion
const PORT = 5000
const HOST = 'localhost'

// creamos la conexion al servidor 
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log('Conectado al servidor');

    client.write('Hola, senior servidor 🙂 ')

    client.setTimeout(1000, () => {
        console.log('Tiempo de espera alcanzado, cerrando conexion...');
        client.end()
    });

    setTimeout(() => {
        console.log('Pausando la recepcion de datos...');
        client.pause()

        setTimeout(() => {
            console.log('Reanudando la recepcion de datos...');
            client.resume()

            client.write('Otro mensaje despues de reanudar.')
        }, 3000)
    }, 2000)
})

client.on('data', (data) => {
    console.log('Datos recibidos por el servidor', data.toString());
})

client.on('end', () => {
    console.log('El servidor cerro la conexion');
})

client.on('error', (err) => {
    console.error('Error en la conexion: ', err.message);
})

client.on('close', () => {
    console.error('Conexion cerrada.');
})

client.unref()

client.ref()

setTimeout(() => {
    console.log('Destruyendo el socket...');
    client.destroy()
}, 1500)