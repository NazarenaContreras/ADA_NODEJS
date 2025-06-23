// Importaciones
const fs = require('fs')
const path = require('path')

// defino el archivo json
// __dirname: veriable global que contiene la ruta del directorio actual
const dataPath = path.join(__dirname, 'data.json')

// objeto que contendra metodos para interactuar con los datos de vehiculos
const vehicleModel = {
    //metodo para obetener un vehiculo por id
    getVehicleById: (id) => {
        // leemos el contenido del archivo data.json
        const rawData = fs.readFileSync(dataPath)
        // convertimos el contenido en js
        const vehicles = JSON.parse(rawData)
        // busca el vehiculo cuyo id coincide con el id que yo te paso
        // si no lo encontras, retorname null
        return vehicles.find(vehicle => vehicle.id === id || null)
    }
}

module.exports = vehicleModel