// ¡Hola, chicas!  

// Hoy vamos a crear juntas un servidor TCP básico. 

// Este servidor estará listo para escuchar conexiones desde otros 

// programas (los "clientes") y mostrar en pantalla cualquier dato que 

// reciba. 

// Aún no nos enfocaremos en los clientes, solo en construir el 

// servidor.

// Objetivo:

// Configurar un servidor TCP que:

// Escuche en el puerto 4000.

// Detecte cuando alguien se conecta.

// Muestre en la consola cualquier mensaje que reciba.

//Paso 1: importacion del modulo net(porque me permite trabajar con servidores TCP)
const net = require('net')

//Paso 2: creacion de servidor
const server = net.createServer((socket) => {
    //mensaje que aparece cuando el cliente se conecta al servidor
    console.log('Un cliente se conecto');

    //Paso 3 (EVENTO DATA): escuchamos el evento data, que se activa cuando el cliente envia datos al servidor
    socket.on('data', (data) => {
        //mostramos el mensaje recibido del cliente
        console.log("Mensaje recibido:", data.toString());
    })

    //Paso 4 (EVENTO END): escuchamos el evento en que se activa cuando el cliente se desconecta del servidor
    socket.on('end', () => {
        //mostramos en la consola el mensaje que el cliente se desconecta
        console.log("El cliente se desocnecto.");
    })
})


//Paso 5: definimos el puerto en el que el servidor estara escuchando
const PORT = 4000;

//Paso 6: Inicio el servidor y lo ponemos a escichar en el puerto que le pasamos
server.listen(PORT, () => {
    console.log('Servidor TCP escuchando en el puerto ${PORT}');
})


