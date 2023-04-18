//let autos = new Array('Ferrari', 'Porsche', 'BMW'); //No se recomienda esta sintaxis
const autos = ['Ferrari', 'Porsche', 'BMW']; 
console.log(autos);

//Recorremos los elementos de un arreglo de forma manual
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

//Recorremos los elementos con ciclo for
for(let i = 0; i < autos.length; i++){
    console.log(i+ ' : ' +autos[i]); 
}

// Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos valores al arreglo - metodo push
autos.push('Audi'); // Agregamos el elemento al final de la lista
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Mercedes Benz';
console.log(autos);

//Tercera forma de agregar elementos
autos[6] = 'Porsche'
console.log(autos);

// Como preguntar si es un Array o Arreglo
console.log(Array.isArray(autos)); //Preguntamos si es un array

// Otra forma de consultar si es un Array o Arreglo
console.log(autos instanceof Array); //Preguntamos si la variable (autos) es una instancia de la clase Array 