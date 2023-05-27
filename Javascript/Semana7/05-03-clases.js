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

let persona1 = new Persona('Martín','Perez');
console.log(persona1.nombre);
persona1.nombre = 'Benicio';
console.log(persona1.nombre)
persona1.apellido = 'Astrada';
console.log(persona1.apellido);
//console.log(persona1);
let persona2 = new Persona('Carlos','Lara');
console.log(persona2.nombre);
persona2.nombre = 'Mia';
console.log(persona2.nombre);
persona2.apellido = 'Pereyra';
console.log(persona2.apellido);
//console.log(persona2);