//Ejercicio 1: Creación y Manipulación de un Objeto JSON
//1.Dentro de la carpeta NODE, crea una nueva carpeta llamada clase2.
//2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
//3.En este archivo, crea un objeto JSON que represente un libro. El objeto debe tener las siguientes propiedades: titulo, autor, año, genero (puede ser un array de géneros).
//Instrucciones:
//• Muestra en la consola el título y el autor del libro.
//• Actualiza el año del libro a un valor más reciente.
//• Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
//• Muestra el objeto actualizado en la consola.

//Paso 1: Crear un objeto JSON
let libro = {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    año: 2007,
    genero: ["fantasía", "aventura"]
};

//Mostrar el titulo y el autor del libro en la consola
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);

//actualizar el año del libro a un valor más reciente
libro.año = 2025;

//Añadir una nueva propiedad llamada páginas
libro.paginas = 662;

//mostrar el objeto actualizado en la consola
console.log("Libro actualizado:", libro);

