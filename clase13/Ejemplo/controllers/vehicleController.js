// importar
const vehicleModel = require('../models/vehicleModel')
const vehicleView = require('../views/vehicleView')

// creo un objeto este manejalas solicitudes de ambos
const vehicleController = {
    // metodo para manejar un solicitud de vehiculo por id
    handleRequest: (id) => {
        // llamamos a este metodo para obtener los datos del vehiculo
        // convertimos el id a un numero entero usando parseInt (base 10)
        const vehicle = vehicleModel.getVehicleById(parseInt(id, 10))
        // llamamos al metodopara formatearla respuesta
        // y que me traiga los datos
        return vehicleView.formatResponse(vehicle)
    }
}

module.exports = vehicleController