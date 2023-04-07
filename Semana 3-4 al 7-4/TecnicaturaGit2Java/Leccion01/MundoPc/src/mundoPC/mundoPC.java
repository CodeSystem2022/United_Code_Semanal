package mundoPC;

import ar.com.system2023.mundopc.*;//Con el asterisco se importan todas las clases del paquete

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13);//Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Objeto diferente
        Monitor monitorGamer = new Monitor("Gamer", 32);//Importar la clase
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        
        Monitor monitorApple = new Monitor("Apple", 16);
        Teclado tecladoApple = new Teclado("USB", "Apple");
        Raton ratonApple = new Raton("USB","Apple");
        
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden();//Inicializamos el arreglo
        Orden orden2 = new Orden();//Nueva lista para el objeto Orden2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer,ratonHP);
        Computadora computadoraApple = new Computadora("Computadora Apple", monitorApple, tecladoApple,ratonApple);
        Computadora computadoraVarias2 = new Computadora("Computadora Apple", monitorApple, tecladoApple,ratonApple);
        Computadora computadoraVarias3 = new Computadora("Computadora variada", monitorApple, tecladoHP,ratonApple);
        Computadora computadoraVarias4 = new Computadora("Computadora variada", monitorGamer, tecladoApple,ratonApple);
        Computadora computadoraVarias5 = new Computadora("Computadora variada", monitorApple, tecladoApple,ratonGamer);
        Computadora computadoraVarias6 = new Computadora("Computadora variada", monitorHP, tecladoGamer,ratonApple);
        Computadora computadoraVarias7 = new Computadora("Computadora variada", monitorApple, tecladoApple,ratonApple);
        Computadora computadoraVarias8 = new Computadora("Computadora variada", monitorGamer, tecladoApple,ratonHP);
        Computadora computadoraVarias9 = new Computadora("Computadora variada", monitorApple, tecladoApple,ratonApple);
        Computadora computadoraVarias10 = new Computadora("Computadora variada", monitorGamer, tecladoHP,ratonApple);
        orden2.agregarComputadora(computadorasVarias);
        orden1.agregarComputadora(computadoraApple);
        orden1.agregarComputadora(computadoraVarias2);
        orden1.agregarComputadora(computadoraVarias3);
        orden1.agregarComputadora(computadoraVarias4);
        orden1.agregarComputadora(computadoraVarias5);
        orden1.agregarComputadora(computadoraVarias6);
        orden1.agregarComputadora(computadoraVarias7);
        orden1.agregarComputadora(computadoraVarias8);
        orden1.agregarComputadora(computadoraVarias9);
        orden1.agregarComputadora(computadoraVarias10);
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        
        //Crear mas objetos de tipo computadora
        //Completar una lista en el objeto orden1
        //Probar los metodos al maximo rendimiento
        
        
    }
}
