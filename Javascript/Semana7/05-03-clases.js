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
    nombreCompleto(){
        return this._nombre + '  ' + this._apellido;;
    }


     //Sobreescribiendo el metodo de la clase padre (Object)
     toString(){ // regresa un string
        return this.nombreCompleto(); //se aplica el polimorfismo: multiples formas en tiempo de ejecucion
        // El metodo que se ejecuta depende si es una REFERENCIA de tipo padre o hija
    }
    static saludar(){
        console.log('Saludos desde este método static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
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
//console.log(persona1);

//cambio de apellido TAREA
console.log(persona1.apellido)
persona1.apellido='Paulista'
console.log(persona1.apellido);
//console.log(persona1);
<<<<<<< Updated upstream
let persona2 = new Persona('Carlos','Lara');
console.log(persona2.nombre);
//console.log(persona2);

//cambio de apellido TAREA
console.log(persona2.apellido)
persona2.apellido='Pietro'
console.log(persona2.apellido);
//console.log(persona2);
=======

let empleado1 = new Empleado('Maria', 'Gomes', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());


//Object.prototype.toString --> de esta manera accedemos a atributos y metodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());
//persona1.saludar();   no se utiliza desde el objeto, si se utiliza desde la clase
Persona.saludar();
Persona.saludar2(persona1);
>>>>>>> Stashed changes
