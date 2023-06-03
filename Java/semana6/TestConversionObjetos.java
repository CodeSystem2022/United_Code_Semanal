import domain.*;
  public class TestConversionObjetos {
      public static void main(String[] args) {
          Empleado empleado;
          empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
          Escritor escritor = (Escritor)empleado;
          escritor.getTipoEscritura();
          
          //Upcasting
          Empleado empleado2 = escritor;
          System.out.println(empleado2.obtenerDetalles ());
                  
    }


}
