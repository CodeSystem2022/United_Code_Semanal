miFuncion(3,10); // Esto se lo conoce como Hosting

function miFuncion (a,b){
    // console.log("Sumamos: "+(a+b));
    return a+b;
}

// Llamamo a la funcion
miFuncion(5,3);

let resultado = miFuncion(10,15);
console.log(resultado);

// Declaramos una funcion de tipo expresion

let x = function(a,b){return a + b}; // necesita cierre con punto y coma
resultado = x(3,5); // al llamarla se pone la variable y paretesis
console.log(resultado);

// funciones de tipo self e invoking

(function(a,b){
    console.log('Ejecutando la funcion: '+ (a+b));
})(9,6);


console.log(typeof miFuncion);

function miFuncionDos (a,b){
    console.log(arguments.length);
}

miFuncionDos(5,7,3)

// toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto)

// Funciones Flecha
const sumarFuncionFlecha = (a,b) => a + b; 
resultado = sumarFuncionFlecha(53,2); // Asignamos el valor a una variable
console.log(resultado);

// Funcion de tipo expresion
let sumar = function(a =5,b =6){
    console.log(arguments[0]); // muestra el parametro de a
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
}
resultado = sumar();
console.log(resultado);

let respuesta = sumarTodo(5,6,8,9,7);
console.log(respuesta);

function sumarTodo(){
    let suma = 0;
    for(let i = 0;i< arguments.length;i++){
        suma += arguments[i]; // arguments es para arreglos
    }
    return suma;
}

// Tipos primitivos 
let k = 10;
function cambiarValor(a){ // Paso por valor
    a = 20;
}

cambiarValor(k);
console.log(k);

// Paso por referencia
const persona = {
    nombre: 'Walter',
    apellido: 'Moya'
}

console.log(persona)

function cambiarValorObjeto(p1){
 p1.nombre = 'Cacho';
 p1.apellido = 'Garay';   
}

cambiarValorObjeto(persona);
console.log(persona);