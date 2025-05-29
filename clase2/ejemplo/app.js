/**
Consigna:
Crear un archivo JSON llamado productos.json que contenga un listado de 
productos. 
Cada producto debe tener las siguientes propiedades: id, nombre, y precio.
Escribir un programa en Node.js que realice las siguientes tareas:
1. Lea el archivo productos.json y muestre en la consola el contenido actual.
2. Agregue un nuevo producto al listado.
3. Escriba nuevamente el archivo JSON con el producto aÃ±adido.
Verifique y muestre en la consola el archivo actualizado.
 */

//Paso 1: Importamos el modulo fs
const fs = require('fs')

// Paso 2: Defino la ruta del archivo json que quiero manipular
const rutaArchivo = './productos.json'

// Paso 3: Leemos el archivo json 
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo: ', err)
        return
    }

    // Paso 4: Convertimos el contenido del archivo json (texto) a un obj js
    const productos = JSON.parse(data)

    // Paso 5: Mostramos el contenido actual del archivo json en la consola
    console.log('Productos actuales: ', productos);

    // Paso 6: Agregar un nuevo producto al listado 
    // creamos un nuevo objeto que representa el producto
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: 'telefono',
        precio: 30
    }

    // Paso 7: Agregamos el nuevo producto al array de productos existentes
    productos.push(nuevoProducto)

    // Paso 8: Mostramos en la consola el array actualizado con el prod nuevo
    console.log('Productos actualizados: ', productos);

    // Paso 9: Escribimos el archivo json actualizado
    // convertimos el obj js (productos) nuevamente a texto json
    const contenidoActualizado = JSON.stringify(productos, null, 2) //formatear el espacio (mejor legibilidad)

    // Paso 10: Escribir el archivo json modificado /actualizado
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if (err) {
            console.error('Error al escribir el archivo: ', err);
            return
        }
        console.log('Archivo actualizado correctamente');
    })

})