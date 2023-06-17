// //ES5 variables
// var nombre5 = 'David';
// var apellido5 = 'Zapata'

// //ES6 variables
// const nombre6 = 'jero';
// let edad = 9;

// //bloques y alcance de variables

// let test;
// test = 10;
// function prueba() {
//     let test;
//     test = 15;
// }
// prueba();
// console.log(test);

//template string

let nombre = 'pablo'
let apellido ='gil'
// const nacimiento = 1987
// const ciudad = 'lima'

// function calcularEdad(year) {
//     return 2023 - year
// }

// //ES5
// console.log(nombre + ' ' + apellido + ', nacio en ' + ciudad + ' y tiene ' + calcularEdad(1987) +' anios'); 

// //ES6
// console.log(`${nombre} ${apellido}, nacio en  ${ciudad} y su edad es ${calcularEdad(1987)}`);

let nombrecomplaeto = `${nombre} ${apellido}`;
console.log(nombrecomplaeto);

console.log(`${nombre} `.repeat(5));
console.log(nombrecomplaeto.includes('blo'));
console.log(nombrecomplaeto.startsWith('pa'));
console.log(nombrecomplaeto.endsWith('il'));
