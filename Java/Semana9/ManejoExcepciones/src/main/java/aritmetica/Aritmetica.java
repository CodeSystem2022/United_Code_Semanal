
package aritmetica;

import Excepciones.OperacionExcepcion;

public class Aritmetica {
    public static int division(int numerador, int denominador){
        if(denominador == 0){
            throw new OperacionExcepcion("Division entre ceo");    
        }
        return numerador / denominador;
        
    
    
    }
}
