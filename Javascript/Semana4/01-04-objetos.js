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







//Metodo Apply
let arreglo= ['Ing.', '2341234']
console.log(persona4.nombreCompleto2.apply(persona5));

