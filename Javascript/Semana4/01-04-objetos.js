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

console.log('Cambiamos y eliminamos un error');
persona.apellido = 'Betancud'//Cambiamos dinamicamente el valor de un objeto
delete persona.apellido;//Eliminamos el error
console.log(persona);



//Distinta formas de imprimir un objeto

//Nro 3: la función Object.values(), regresa nuestro objeto como un arreglo
console.log("Distintas formas de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//Nro 4: utilizaremos el método JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4");
let personaString = JSON.stringify(persona); //convierte cada objeto en una cadena, asi se puede imprimir sin ningún problema
console.log(personaString); 