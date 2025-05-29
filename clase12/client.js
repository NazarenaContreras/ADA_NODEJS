const net = require("net");

const client = net.createConnection({port: 8080}, () => {
    console.log("Conectado al servidor");
    client.write("/home/user/prueba.txt");
});

client.on("data", (data) => {
    console.log(`Respuesta del servidor: ${data.toString()}`);
    client.end();
});

client.on("end", () => {
    console.log("Desconectado del servidor");
});