// - Sistema de Gestión de Libros -
// Consigna:
// Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de su ID. 
// El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) y devolverá la información al cliente.

//Modelo para manejar la lista de libros.

const fs = require('fs')
const path = require('path')

//ruta del archivo JSON que contiene la lista de libros
const filePath = path.join(__dirname, "../models/bookData.json")

//funcion para obtener un libro por su ID
const getBookById = (id) => {
    try {
        const adta = fs.readFileSync(filePath,  `utf8`);
        const books = JOSON.parse(data);
        return books.find(book => book.id === id) || null;
    } catch (error) {
        console.error("Error al leer archivo JSON: ", error);
        return null;
    }
};

module.exports = {getBookById};