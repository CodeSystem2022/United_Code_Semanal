//let persona3 = new Persona('Carla', 'Ponce'); esto no se debe hacer: Persona is not defined

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido= apellido;
    }

}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre)
persona1.nombre='jopo'
console.log(persona1.nombre);
//console.log(persona1);

//cambio de apellido TAREA
console.log(persona1.apellido)
persona1.apellido='Paulista'
console.log(persona1.apellido);



let persona2 = new Persona('Mario', 'Archundia');
console.log(persona2.nombre)
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
//console.log(persona2);

//cambio de apellido TAREA
console.log(persona2.apellido)
persona2.apellido='Pietro'
console.log(persona2.apellido);
//console.log(persona1);