
persona2.telefono = 3834654865; // Una propiedad exclusiva del objeto padre
console.log(madre.telefono) // la propiedad no esta definida

// Uso de prototype
Persona3.prototype.telefono = '261321654654';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '543132116541';
console.log(madre.telefono);
