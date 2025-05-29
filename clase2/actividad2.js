// Conversión de Objetos JavaScript a JSON  
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado actividad2.js.  
// 2.Crea un objeto en JavaScript que represente a un estudiante con las siguientes propiedades: nombre, edad, curso, notas (un array de números). 
// Instrucciones: 
// • Convierte este objeto a una cadena JSON usando JSON.stringify(). 
// • Muestra la cadena JSON en la consola. 
// • Luego, convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse() y muestra el objeto en la consola. 

const alumnos = {
    nombre: 'Nazarena Contreras',
    edad: 23,
    curso: 'Node JS',
    notas: [8, 9, 10]
}

const jsonstring = JSON.stringify(alumnos);
console.log = (jsonstring); // Muestra la cadena JSON en la consola

const objeto = JSON.parse();
console.log = (objeto); // Muestra el objeto en la consola
