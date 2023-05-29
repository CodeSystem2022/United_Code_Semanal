class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    } 


    get nombre(){
        return this._nombre;
    }  

    set nombre(nombre){
        this._nombre = nombre;
    } 

    get apellido(){
        return this._apellido;
    } 

    set apellido(apellido){
        this._apellido = apellido;
    }
}

<<<<<<< Updated upstream
let persona1 = new Persona('Martín','Perez');
=======
class Empleado extends Persona{ // Clase Hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Martin', 'Perez');
console.log(persona1.nombre)
persona1.nombre='jopo'
>>>>>>> Stashed changes
console.log(persona1.nombre);
persona1.nombre = 'Benicio';
console.log(persona1.nombre)
persona1.apellido = 'Astrada';
console.log(persona1.apellido);
//console.log(persona1);
<<<<<<< Updated upstream
let persona2 = new Persona('Carlos','Lara');
console.log(persona2.nombre);
persona2.nombre = 'Mia';
console.log(persona2.nombre);
persona2.apellido = 'Pereyra';
console.log(persona2.apellido);
//console.log(persona2);
=======

let empleado1 = new Empleado('Maria', 'Gomes', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());


//Object.prototype.toString --> de esta manera accedemos a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());
>>>>>>> Stashed changes
