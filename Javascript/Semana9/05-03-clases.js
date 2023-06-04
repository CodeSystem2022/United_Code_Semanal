



static contadorPersonas= 0;
//email = 'Valor default email'; // atributo NO estatico 

static get MAX_OBJ(){//Este metodo simula una constante
    return 5;
}






constructor(nombre, apellido){ //metodo
    this._nombre = nombre;
    this._apellido = apellido; 
    if(Persona.contadorPersonas < Persona.MAX_OBJ){
        this.idPersona = ++Personas.contadorPersonas;
    }else{
        console.log('Se ha superado el maximo de objetos permitidos')
    }








    nombreCompleto(){ // metodo
        return this.idPersona+' '+this._nombre+' '+this._apellido;
    }  



console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10;//No se puede modificar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Franco','Diaz');
console.log(persona4.toString());

let persona5 = new Persona('Liliana','Paz');
console.log(persona5.toString);

















































//inicio video parte 6
let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);
