//En gestionEstudiantes.js: 
//  Importa el array desde estudiantes.js. 
//  Muestra en la consola los nombres de todos los estudiantes. 
//  Calcula y muestra el promedio de notas de un estudiante específico. 
//  Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON. 

const estudiantes = require('./estudiantes.js');
console.log(estudiantes);

function calcularPomedio(nombre) {

//buscar el nombre del estudiante
    const estudiante = estudiantes.find(e => e.nombre === nombre);

    if (!estudiante) {
        erturn `No se encontró el estudiante ${nombre}`;
    }

    //calcular el promedio
    const promedio = estudiante.notas.reduce((sum, nota) => sum + nota, 0 ) / estudiante.notas.length;
    return `El promedio de ${nombre} es ${promedio}`;
}

// para calcular el promedio de Josh Dun
const promedioJoshDun = calcularPromedio('Josh Dun');
console.log(`El promedio de notas de Josh Dun es: ${promedioJoshDun}`);



//Nuevo estudiante
const nuevoEstudiante = {
    nombre: 'Mike Shinoda',
    edad: 45,
    curso: 'Node JS',
    notas: [10, 9, 8]
};

// Agregar el nuevo estudiante al array
estudiantes.push(nuevoEstudiante);

// Mostrar el array actualizado en formato JSON
console.log(JSON.stringify(estudiantes, null, 2)); //los datos se organizan con una indentación de 2 espacios para mejor legibilidad. 
// null -> No filtra propiedades, se mantiene todo igual.
//2 -> Indenta el JSON con 2 espacios para facilitar la lectura.


