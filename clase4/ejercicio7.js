//Ejercicio 7: Encuentra tu meta perdida
// Consigna: Revisa tu lista de metas en el archivo metas.json. 
// Busca si una meta específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
// Pista: Usa fs.readFile para leer el archivo y un método como find para buscar en la lista.

const fs = require('fs')

fs.readFile('metas.js', 'utf-8', (err, data) => {
    if(err){
        console.error('Hubo un error, no encontramos la meta.');
    }else{
        const metas = JSON.parse(data)  //Convertir los datos de texto a un objeto
        
    }
})