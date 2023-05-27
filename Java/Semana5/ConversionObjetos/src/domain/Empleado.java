
package domain;

public class Empleado { //clase padre
    protected String nombre;
    protected double sueldo;

    public Empleado(String nombre, double sueldo){ //constructor
	this.nombre = nombre; //instancias de los atributos
	this.sueldo = sueldo; 
    } 

    // metodo para la sobreescritura
    public String obtenerDetalles(){
	return "Nombre: "+this.nombre+", Sueldo: "+this.sueldo;
    } 

    public String getNombre() {
	return nombre;
    }

    public void setNombre(String nombre) {
	this.nombre = nombre;
    }

    public double getSueldo() {
	return sueldo;
    }

    public void setSueldo(double sueldo) {
	this.sueldo = sueldo;
    } 

    @Override
    public String toString(){
	return "Empleado{"+ "nombre = "+ nombre + ", sueldo = "+ sueldo +"}";
}

    
}
