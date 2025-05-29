//Ejercicio 4: ¿Existe tu perfil?     
// Consigna: Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json existe. Si no existe, crea uno nuevo con un perfil básico. 
// Pista: Usa fs.existsSync para verificar la existencia del archivo. 

//paso 1 exportamos
var fs = require('fs')

//paso 2 verificamos si el perfil json existe
if (fs.existsSync('perfil.json')) {
    console.log('tu perfil ya existe, revisa perfil.json')
} else{
    const perfilBasico = {
    nombre: 'Laura',
    edad: 35,
    ciudadFavorita: 'Londres'
    }
    fs.writeFile('perfil.json', JSON.stringify(perfilBasico, null, 2)), (err) => {
        if(err){
            console.error('No se pudo crear el perfil basico', err)
        } else {
            console.log('Perfil basico creado!')
        }
    }
}


