package test;

import paquete1.Clase1;

public class TestModificadores {

    public static void main(String[] args) {
        Clase1 clase1 = new Clase1();
        System.out.println("clase1 = " + clase1.atributopublic);
        clase1.metodoPublico();
    }
}
