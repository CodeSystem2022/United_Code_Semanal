
package test;

import accesodatos.*;

public class TestInterfaces { //una Interface no tiene caracteristicas, sino COMPORTAMIENTO
    public static void main(String[] args) {
	IAccesoDatos datos = new ImplementacionmySql(); //traemos la clase que recibe el co,portamiento de Interface
	//datos.listar(); 
	//imprimir(datos);

	datos = new ImplementacionOracle();
	//datos.listar();
	imprimir(datos);
    } 

    public static void imprimir(IAccesoDatos datos){ // metodo que tiene como referencia la variable datos
	datos.listar();
    }
}
