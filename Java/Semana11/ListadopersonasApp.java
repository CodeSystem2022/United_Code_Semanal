import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //Menú
        var salir = false;
        while (!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){
                System.out.println("Ocurrío un error: "+e.getMessage());
            }
            System.out.println();
        }//Fin ciclo while
    }//Fin método main
    private static void mostrarMenu(){
        //mostramos las opciones
        System.out.print("""
                ************ Listado de Personas*********
                1. Agregar
                2. Listar
                3. Salir          
                """);
        System.out.print("Digite una de las opciones");

    }//mostrar menu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona>personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revisamos la opcion a traves de un switch
        switch (opcion){
            case 1 -> {//Agregar una persona a la lista
                System.out.println("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.println("DIgite el telefono: "  );
                var tel = entrada.nextLine();
                System.out.println("Digite el correo: ");
                var email = entrada.nextLine();
                //creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" Elementos");
                 } // caso1
            case 2 -> {//listar a las personas
                System.out.println("Listado de personas: ");
                // Mejoras con lambda y el método de referencia
                //personas.forEach((persona ) -> System.out.print(persona));
                  personas.forEach(System.out::println);
            }
            case 3 -> {//Salir
                System.out.println("Hasta pronto...");
                salir = true;
            }//fin caso 3
            default -> System.out.println("Opcion incorrecta "+ opcion);

        }//Fin del switch
        return salir;
    }//fin ejecutar operación
}