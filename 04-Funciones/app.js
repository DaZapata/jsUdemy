function bienvenido(){
    console.log('bienvenido a la seccion de funciones');
}
bienvenido();

//partes de una funcion
//parametros, codigo, salida

function cuadraro(num) {
    var resultado = num * num;
    return resultado;
}

var num = 3;
var res = cuadraro(num);
console.log(res);

const calcularEdad = (anioNacimiento) => {
    var anoActual = 2023 - anioNacimiento;
    return anoActual;
}

var edadJubilacion = 65;
var teFaltan = 65 - calcularEdad(1987);

console.log(`te faltan ${teFaltan} anios para jubilarte`);

//************************* */
//funciones como expresiones

var prueba = function(){
    return 'mensaje de prueba'
}
console.log(prueba());
console.log('***************');
/*parametros indefinidos */
var name;
var test = function(n) {
    return 'hola ' + n;
}
console.log(test(name));
console.log('***************');

/**argumentos nullos */
var a;
a = null;
var valorNulo = function(){
    return a;
}
console.log(valorNulo());
console.log('***************');

/**argumentos por defecto */
var sumar = function(a, b, c = 4){
    return a + b + c;
}
console.log(sumar(10, 4));