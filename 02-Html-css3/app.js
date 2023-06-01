/* sentencia if - else*/
var nombre = 'david';
var estadoCivil = true;

if (estadoCivil){
    console.log(nombre + ' esta casado');
} else {
    console.log(nombre + ' esta soltero');
}

//operador ternario
var nombre2 = 'pablo';
var edad = 22;

edad >= 18 ? console.log(nombre2 + ' es mayor de edad') : console.log(nombre2 + ' es menor de edad');


//sentencia switch
var mes = 3;

switch (mes) {
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default:
        console.log('Mes no existente');
        break;
}

//sentencia for
for (let index = 0; index <= 5; index+=2) {
    console.log(index);
}

//sentencia while
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//sentencia do While
var e = 10;
do {
    console.log(e);
    e++;
} while (e <= 20);

//valores verdaderos y falsos
var age;
if (age) {
    console.log('la variable esta definida');
}else{
    console.log('la variable no esta definida');
}

var lastName = 'zapata';
if (lastName) {
    console.log('la variable esta definida');
}else{
    console.log('la variable no esta definida');
}

var team = 0;
if (team) {
    console.log('la variable esta definida');
}else{
    console.log('la variable no esta definida');
}

var pc = '';
if (pc) {
    console.log('la variable esta definida');
}else{
    console.log('la variable no esta definida');
}

//operadores de igualdad
//con coersion
var milo = '12';
if (milo == 12) {
    console.log('variable con coersion');
} else {
    console.log('variable sin coersion');
}

//sin coersion
if (milo === 12) {
    console.log('variable con coersion');
} else {
    console.log('variable sin coersion');
}

//en js para comparar debe ser con === 3 iguales, compara valor y tipo

//ejercicio
var mujer = {
    nombre: 'Maria',
    notas: [3,4,6]
}

var hombre = {
    nombre: 'Pablo',
    notas: [1,3,5]
}

var sumaMujer = 0;
for (let index = 0; index < mujer.notas.length; index++) {
    sumaMujer += mujer.notas[index];
}
console.log(sumaMujer);

var sumaHombre = 0;
for (let index = 0; index < hombre.notas.length; index++) {
    sumaHombre += hombre.notas[index];
}
console.log(sumaHombre);

