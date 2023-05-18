
package domain;

public class Gerente extends Empleado{
    private String departamento;

    public Gerente(String nombre, double sueldo, String departamento){
	super(nombre,sueldo);//llamamos primero al constructor de la clase padre, a traves de "super"
	this.departamento = departamento; // inicializamos el atributo
    } 

    //sobreescribimos el metodo
    @Override //se conoce como una anotacion, el metodo obtener detalles esta siendo escrito desde la clase hija
    public String obtenerDetalles(){
	return super.obtenerDetalles()+", Departamento: "+this.departamento;
    } 

    public String getDepartamento() {
	return departamento;
    }

    public void setDepartamento(String departamento) {
	this.departamento = departamento;
    }

    
}
 //polimorfismo: multiples comportamientos, se puede visualizar en tiempo de ejecucion