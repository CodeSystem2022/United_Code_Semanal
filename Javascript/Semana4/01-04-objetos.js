
let x = 10; //variable de tipo primitiva
console.log(x.length);

console.log("Tipos primitivos");
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Jay',
    email: 'cjay@gmail.com',
    edad: 30,
    nombreCompleto: function() { //Método o función en JavaScript
        return this.apellido + " " + this.nombre;
    }
}

let x = 10; // variable de tipo primitiva
console.log(x.length);
console.log("Tipos primitivos");

//Objeto
let persona = {
    nombre: "Martina",
    apellido: "Sauthier",
    email: "martu_sauth@gmail.com",
    edad: 19,
    nombreCompleto: function(){ //METODO o funcion en javascript
        return this.nombre+" "+this.apellido;
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

console.log(persona.nombreCompleto()); 







//Metodo Apply
let arreglo= ['Ing.', '2341234']
console.log(persona4.nombreCompleto2.apply(persona5));


