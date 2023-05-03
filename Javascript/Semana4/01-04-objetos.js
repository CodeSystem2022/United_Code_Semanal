//Nro 3: la función Object.values(), regresa nuestro objeto como un arreglo
console.log("Distintas formas de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//Nro 4: utilizaremos el método JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4");
let personaString = JSON.stringify(persona); //convierte cada objeto en una cadena, asi se puede imprimir sin ningún problema
console.log(personaString); 