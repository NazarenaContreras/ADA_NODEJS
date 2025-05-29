//Ejercicio 6: Tu lista de metas
// Consigna: Es momento de planear tus metas. 
// Crea un archivo llamado metas.json con una lista vacía al principio. 
// Luego, agrega metas como: “Aprender Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
// Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la lista.

// primer paso importar el modulo fs
 const fs = require('fs')

 //crear archivo metas.json
//primero se crea el objeto que representa metas
const metas = {
    estudios: 'Aprender node.js',
    estiloDeVida: 'Viajar a Japon',
    salud: 'ir a la nutricionista'
}

//luego se convierte el objeto a formato json
fs.writeFile('metas.json',JSON.stringify(metas, null, 2), (err) =>{
    if (err) {
        console.error('Hubo un error al crear metas:', err);
    }else{
        console.log('Metas creadas exitosamente')
    }
})

