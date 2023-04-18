package ar.com.system2023.mundopc;

public class Teclado extends DispositivoEntrada{
    private final int idTeclado;//Le agrego 2 atributos
    private static int contadorTeclados;
    
    public Teclado(String tipoEntrada, String marca){//Constructor de la clase raton
        super(tipoEntrada,marca);//Extiende las propiedades del padre
        this.idTeclado = ++Teclado.contadorTeclados;//Al ser llamado, aumenta el idRaton
    }

    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado + ", " + super.toString() +'}';
    }
    
}

