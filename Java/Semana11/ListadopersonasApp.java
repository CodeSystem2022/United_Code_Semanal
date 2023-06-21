import java.util.List;
import java.util.Scanner;


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

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revisamos la opcion digitada a través de un switch
        switch (opcion){
            case 1 -> { //Agregar una persona a la lista
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el teléfono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el correo: ");
                var email = entrada.nextLine();
                // Creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+ " elementos");
            } //Fin caso 1
