// Crear el servidor básico 
// Objetivo: Configurar un servidor TCP que escuche en el puerto 5000.  
// 1. Crea un archivo llamado servidor.js. 
// 2. Importa el módulo que te permite trabajar con servidores TCP (net). 
// 3. Usa el método que crea un servidor. Pista: Este método necesita una función que se ejecuta cuando alguien se conecta.

const net = require ('net')

const server = net.createServer((socket) =>{

//Detectar conexiones de clientes 
// Objetivo: Mostrar en la consola cuando un cliente se conecta al servidor. 
// 1. Revisa la función que agregaste al crear el servidor. Pista: Esa función se ejecuta cada vez que un cliente se conecta. 
// 2. Dentro de esa función, agrega un mensaje en la consola que diga: "¡Un cliente se ha conectado!". 
    console.log("¡Un cliente se ha conectado!");


    //Recibir y mostrar datos del cliente 
    // Objetivo: Mostrar en la consola cualquier mensaje que el cliente envíe al servidor.
    // 1. Usa el evento data para detectar cuando el cliente envía datos. Pista: El evento se llama en el socket que representa la conexión del cliente. 
    // 2. En el callback del evento, convierte los datos recibidos (buffer) en texto usando .toString(). 
    // 3. Muestra el mensaje en la consola con un texto como: "Mensaje recibido del cliente: <mensaje>". 
    socket.on('data', (data) => {
        const mensaje = data.toString();
        console.log(`Mensaje recibido del cliente: ${mensaje}`);

        //Responder al cliente 
        //Objetivo: Enviar una respuesta al cliente después de recibir un mensaje.  
        //1. Dentro del evento data, agrega una línea para enviar datos al cliente. Pista: Usa el método que permite escribir datos en el socket. 
        //2. Escribe un mensaje que diga: "¡Hola, cliente! Tu mensaje fue recibido correctamente."  

        const respuesta = 'Hola cliente! tu mensaje fue recibido.';
        socket.write(respuesta);
    
    });

    //Detectar cuando el cliente se desconecta 
    //Objetivo: Mostrar en la consola un mensaje cuando el cliente cierra la conexión.
    //1. Usa el evento end para detectar cuándo el cliente se desconecta. Pista: Este evento también está disponible en el socket. 
    //2. Dentro del callback del evento, agrega un mensaje en la consola que diga: "El cliente se ha desconectado."  

    socket.on('end', () => {
        console.log("El cliente se ha desconectado.");
    })
})

//Crear el servidor básico
//Definimos el puerto en el que el servidor estará escuchando.
const PORT = 5000;

//Hacemos que el servidor "escuche" en el puerto definido.
server.listen(PORT, () => {
     //Mostramos un mensaje en la consola indicando que el servidor está listo.
    console.log('El servidor esta listo ${PORT}');
})






