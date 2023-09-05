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


const mayores = personajesSimpsons.filter(x => x.edad > 18);
console.log(mayores)

// Ejercicio 2

const sumaEdades = mayores.reduce( (acc, personaje) => { return acc + personaje.edad} ,0);

console.log(sumaEdades);

// Ejercicio 3

const nombresPersonajes = mayores.map( x => x.nombre);

console.log(nombresPersonajes);




