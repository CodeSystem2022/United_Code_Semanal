
persona2.telefono = 3834654865; // Una propiedad exclusiva del objeto padre
console.log(madre.telefono) // la propiedad no esta definida

// Uso de prototype
Persona3.prototype.telefono = '261321654654';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '543132116541';
console.log(madre.telefono);



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

console.log("Comenzamos a utilizar el metodo get");
console.log(persona.nombreEdad);