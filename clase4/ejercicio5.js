//Ejercicio 5: ¡Despídete de tu perfil!  
// Consigna: ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json. 
// Verifica que el archivo existe antes de intentar borrarlo. Pista: Usa fs.unlink para eliminar archivos 

//importamos el modulo 'fs'
var fs = require('fs')

//verificamos que el archivo perfil.json existe

if(fs.existsSync('perfil.json')){
    fs.unlink('perfil.json', (err) => {
        if(err){
            console.error('No se puedo eliminar tu perfil:', err)
        }else{
            console.log('Perfil eliminado exitosamente')
        }
    })
}else{
    console.log('El arcivo perfil.json no existe, nada que eliminar!')
}

//a practicar las estructuras!
