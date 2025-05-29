//Actividad 1: Registro de libros favoritos Consigna: 
// ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un programa que permita registrar libros favoritos en un archivo JSON. Implementa las siguientes funciones: 
// 1. Agregar un libro: Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre. 
// 2. Listar los libros: Muestra todos los libros registrados. 
// Pistas: • Usa un archivo JSON para guardar los libros. • Si el archivo no existe, comienza con un arreglo vacío. 

const fs = require('fs');
const filePath = 'libros.json';

// Función para agregar un libro
function agregarLibro(nombre) {

    // Leer el archivo JSON
    let libros = [];
    if (fs.existsSync(archivo)) {
        const data = fs.readFileSync(archivo, 'utf8');
        libros = JSON.parse(data);
    }

    // Agregar el nuevo libro
    libros.push({ nombre });

    // Guardar el archivo JSON
    fs.writeFileSync(archivo, JSON.stringify(libros, null, 2), 'utf8');
    console.log({libros})
}
