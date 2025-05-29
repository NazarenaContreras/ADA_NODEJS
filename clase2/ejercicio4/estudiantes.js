//En estudiantes.js:  
// Crea un array de objetos que represente una lista de estudiantes. 
// Cada estudiante debe tener las propiedades: nombre, edad, curso y notas (un array de números). 
// Exporta este array usando module.exports. 

const estudiantes = [
    {nombre: 'Josh Dun', edad: 27, curso: 'Node JS', notas: [8, 9, 10]},
    {nombre: 'Tyler Joseph', edad: 30, curso: 'Node JS', notas: [7, 8, 9]},
    {nombre: 'Serj Tankian', edad: 45, curso: 'Node JS', notas: [10, 9, 8]},
    {nombre: 'Daron Malakian', edad: 38, curso: 'Node JS', notas: [9, 10, 9]},
]

module.export = estudiantes; // Exporta el array de estudiantes para que pueda ser utilizado en otros archivos

