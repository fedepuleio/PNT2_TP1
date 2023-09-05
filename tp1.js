const personajesSimpsons = [
{ nombre: "Homero", edad: 39, rol: "Padre" },
{ nombre: "Marge", edad: 36, rol: "Madre" },
{ nombre: "Bart", edad: 10, rol: "Hijo" },
{ nombre: "Lisa", edad: 8, rol: "Hija" },
{ nombre: "Maggie", edad: 1, rol: "Hija" },
{ nombre: "Ned", edad: 35, rol: "Vecino" },
{ nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
{ nombre: "Milhouse", edad: 10, rol: "Amigo" },
{ nombre: "Nelson", edad: 12, rol: "Bravucón" },
{ nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];

// Ejercicio 1 


const menores = personajesSimpsons.filter(x => x.edad < 18);
console.log(menores)

// Ejercicio 2

const sumaEdades = menores.reduce( (acc, personaje) => { return acc + personaje.edad} ,0);

console.log(sumaEdades);

// Ejercicio 3

const nombresPersonajes = menores.map( x => x.nombre);

console.log(nombresPersonajes);

// Ejercicio 4 

const cambioRoles = menores.map( ({nombre,edad,rol}) => {
rol = "Estudiante";
return {nombre,edad,rol};
});

console.log(cambioRoles);

// Ejercicio 5 

const personajesSouthPark = [
    { nombre: "Cartman", edad: 10, rol: "Estudiante" },
    { nombre: "Kyle", edad: 10, rol: "Estudiante" },
    { nombre: "Stan", edad: 10, rol: "Estudiante" },
    { nombre: "Kenny", edad: 10, rol: "Estudiante" }
    ];

const todos = [...personajesSimpsons,...personajesSouthPark];

console.log(todos);

