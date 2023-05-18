
package domain;

public enum TipoEscritura { //borramos la palabra class por la enum -->para que sea una enumeracion
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital"); 

    private final String descripcion;

    private TipoEscritura(String descripcion){ //constructor
	this.descripcion = descripcion;
    } 

    //metodo get
    public String getDescripcion(){
	return this.descripcion;
}
}
