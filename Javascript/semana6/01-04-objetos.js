
persona2.telefono = 3834654865; // Una propiedad exclusiva del objeto padre
console.log(madre.telefono) // la propiedad no esta definida

// Uso de prototype
Persona3.prototype.telefono = '261321654654';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '543132116541';
console.log(madre.telefono);


// Uso de call
let persona4 = {
    nombre: "Javier",
    apellido: "Klikailo",
    nombreCompleto2: function(titulo, telefono){
        return titulo+": "+ this.nombre+ " "+this.apellido+ " "+telefono;
    }
} 

let persona5 = {
    nombre: "Gabriel",
    apellido: "Fernandez"
} 

console.log(persona4.nombreCompleto2("Dr.", "123456789"));
console.log(persona4.nombreCompleto2.call(persona5,"Ing.", "789654123" ));




let x = 10; //variable de tipo primitiva
console.log(x.length);

console.log("Tipos primitivos");
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Jay',
    email: 'cjay@gmail.com',
    edad:28,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
         this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function() { //Método o función en JavaScript
        return this.apellido + " " + this.nombre;
    },
    get nombreEdad(){//Este es el método get
        return "El nombre es: " + this.nombre+", edad: "+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log("Ejecutando con un objeto");

let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5491122334455';
console.log(persona2.telefono);
console.log("Creamos un nuevo objeto");

console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log("Usamos el ciclo for in");

//for in => accedemos al objeto como si fuera un arreglo
for(propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log("Cambiamos y eliminamos un error");
persona.apellida = 'Perez'; //Cambiamos dinámicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

//Número 1: La más sencilla, concatenar cada valor de cada propiedad
console.log("Distintas formas de imprimir un objeto: forma 1");
console.log(persona.nombre + ', ' + persona.apellido);

//Número 2: A través del ciclo for in
console.log("Distintas formas de imprimir un objeto: forma 2");
for (const nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//Distinta formas de imprimir un objeto

//Nro 3: la función Object.values(), regresa nuestro objeto como un arreglo
console.log("Distintas formas de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//Nro 4: utilizaremos el método JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4");
let personaString = JSON.stringify(persona); //convierte cada objeto en una cadena, asi se puede imprimir sin ningún problema
console.log(personaString); 

console.log("comenzamos a utilizar el metodo get y set para idioma");
persona.lang = 'en';
console.log(persona.lang);


//Diferentes formas de crear objetos
//caso número 1
let miObjeto = new Object(); //Esta es una opción formal

//caso número 2
let miObjeto2 = {}; //Esta opción es breve y recomendada


//caso String 1
let miCadena = new String('Hola'); //Sintaxis formal

//caso String 2
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada


//caso con números 1
let miNumero = new Number(1); //Es formal no recomendable

//caso con números 2
let miNumero2 = 1; //Sintaxis recomendada


//caso boolean 1
let miBoolean1 = new Boolean(false); //Formal

//caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada


//caso Arreglos 1
let miArreglo1 = new Array(); //Formal

//caso Arreglos2
let miArreglo2 = []; //Sintaxis recomendada


//caso function 1
let miFuncion1 = new function(){}; //Todo después de new es considerado objeto

//caso function 2
let miFuncion2 = function(){}; //Notación simplificada y recomendada
