

public class ListadoPersonasApp {
    public static void main(String[] args) {

        while (!salir){
            mostrarMenu();
            try {
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){
                System.out.println("Ocurrió un error: "+e.getMessage());
            }
            System.out.println();
        } //Fin del ciclo while
    } //Fin método main