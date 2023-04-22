package ar.com.system2023.mundopc;

public class Raton extends DispositivoEntrada{//Creamos una clase Raton, hija de DispositivoEntrada
    private final int idRaton;//Le agrego 2 atributos
    private static int contadorRatones;
    
    public Raton(String tipoEntrada, String marca){//Constructor de la clase raton
        super(tipoEntrada,marca);//Extiende las propiedades del padre
        this.idRaton = ++Raton.contadorRatones;//Al ser llamado, aumenta el idRaton
    }

    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton + ", " + super.toString() +'}';
    }
    
}
