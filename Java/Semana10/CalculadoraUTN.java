import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);
        while (true){ //Ciclo infinito
            System.out.println("************** Aplicacion Calculadora**************");
            mostrarMenu();
            try{
                var operacion = Integer.parseInt(entrada.nextLine());
                if(operacion >= 1 && operacion <= 4){

                    ejecutarOperacion(operacion, entrada);
                }//Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break; //Rompe el ciclo
                }
                else {
                    System.out.println("Opcion erronea: "+operacion);
                }
                //Imprimimos un salto de linea antes de repetir el menu
                System.out.println();
            } catch (Exception e){//Fin del try, comienzo del catch
                System.out.println("Ocurrió un error: "+e.getMessage());
            }
        }//Fin while
    }//Fin main

    private static void mostrarMenu(){
    //Mostramos el menú
            System.out.println("""
                                        1. Suma
                                        2. Resta
                                        3. Multiplicación
                                        4. División
                                        5. Salir
                                """);
            System.out.print("Operación a realizar? ");
        }//Fin método mostrarMenu

    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion) {
            case 1 -> {// Suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> {// Resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> {// Multiplicación
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            }
            case 4 -> {// Division
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division: " + resultado);
            }
            default -> System.out.println("Opcion erronea: " + operacion);
        }//Fin Switch
    }//Fin metodo ejecutarOperacion

} //Fin clase

