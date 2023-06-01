function bienvenido(){
    console.log('bienvenido a la seccion de funciones');
}
bienvenido();

//partes de una funcion
//parametros, codigo, salida

// function cuadraro(num) {
//     var resultado = num * num;
//     return resultado;
// }

const resul = (num) =>{
    var respo = num*num
    return respo
}

var num = 3;
var res = resul(num);
console.warn(res);

const calcularEdad = (anioNacimiento) => {
    var anoActual = 2023 - anioNacimiento;
    return anoActual;
}

var edadJubilacion = 65;
var teFaltan = 65 - calcularEdad(1987);

console.log(`te faltan ${teFaltan} anios para jubilarte`);
