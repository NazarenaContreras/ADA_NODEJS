// importaciones
const http = require('http')
constfs = ('fs')

//definir elpuerto
const PORT = 3000

//creamos el servidor
const server = http.createServer((req, res) => {
    // leeamos el archivo json
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if (err) {
            res.end('Nose pudo leer el archivo json')
            return
        }

        //enviamos el contenido del archivo json
        res.setHeader('Content-Type', 'alication/json')
        res.end(data) // enviamos el contenido del archivo json
    })
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})