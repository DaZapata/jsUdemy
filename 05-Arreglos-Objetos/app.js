/**arreglos en js */
var nombres = ['david', 'jero', 'mafe'];
var vegetables = new Array('tomate', 'cebolla', 'limon');

console.log(nombres[0]);

nombres[1]= 'carlos';
console.log(nombres);

console.log(nombres.length);

/**operaciones con arreglos, recorrerlos */
var frutas = ['pera', 'manzana', 'uva', 'sandia'];

// for (let index = 0; index < frutas.length; index++) {
//     console.log(frutas[index]);
// }

frutas.forEach(function (elemento, indice){
    console.log(elemento, indice);
});

frutas.push('naranja'); //agregfa al final
console.log(frutas);
frutas.unshift('coco'); //agrega al inicio
console.log(frutas);
frutas.pop() //elimina el ultimo
console.log(frutas);
frutas.shift() //elimina el primero
console.log(frutas);

var position = frutas.indexOf('uva'); //devuelve la posicion en la que esta
console.log(position);

frutas.splice(1,1); //se elimina la posicion 1
console.log(frutas);

frutas.reverse(); //pone un listado al reves
console.log(frutas);

/**arreglo con elementosa de diferentes tipos */
var persona = ['pepe', 'gil', 39, '23323232', 1.75];
console.log(persona);

/**objetos de forma literal */
var peoples = {
    nombre: 'pepe',
    apellidp: 'lopez',
    gustos: ['futbol', 'peliculas', 'ingles'],
    trabajo: 'instructor',
    escasado: true
};
console.log(peoples);
console.log(peoples.nombre);
console.log(peoples.trabajo);
console.log(peoples.gustos[1]);

peoples.escasado = false;
console.log(peoples);

/**objetos con la sintaxis Object */
var people2 = new Object();
people2.nombre = 'ana',
people2.apellidp = 'limo',
people2['trabajo'] = 'webdev';


var people3 = {
    nombre: 'Jero',
    apellido: 'Zapata',
    yearNacimiento: 1987,
    //metodos
    calcularEdad: function() {
        return 2023 - this.yearNacimiento
    }
}

console.log(people3);
var edad = people3.calcularEdad(1987);
console.log(edad);