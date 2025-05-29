//paso 1 importar el modulo
const net = require('net')

//paso 2 crear la conexion TCP para que se conecte al servidor
const client = net.createConnection({port:5000}, () => {
    console.log('Conectado al servidor');
    client.write('Hola servidor :) ya me conecte')
})

//paso 3 comienzo a definir los eventos
//A: Evento data
client.on('data', (data) => {
    console.log('Mensaje recibido: ', data.toString());
})

//B: Evento end
client.on('end', () => {
    console.log('El servidor se cerro.');
})

//C: evento error
client.on('error', (err) => {
    console.log('Error: ', err.message);
})

//D: Evento close
client.on('close', () => {
    console.log('Se cerro la conexion');
})

//Paso 4 jugamos con el tiempo
client.setTimeout(10000, () => {
    console.log('Tiempo de espera agotado')
    client.end();
});

setTimeout(() => {
    console.log('Pausando la recepcion de datos...')
    client.resume();
})


