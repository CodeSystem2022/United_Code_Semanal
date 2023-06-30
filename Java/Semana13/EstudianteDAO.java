package UTN.datos;
//videos 2 y 3
import UTN.dominio.Estudiante;
import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    //Método listar
    public List<Estudiante> listar(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos algunos objetos que son necesarios para comunicarnos con la base de datos
        PreparedStatement ps; //Envía la sentencia a la base de datos
        ResultSet rs; //Obtenemos el resultado de la base de datos
        //Creamos un objeto de tipo conexion
        Connection con = getConnection();




//Videos 4 y 5
STRING sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiantes2022";
try{
    ps = con.prepareStatement(sql);
    rs = ps.executeQuery();
    while(rs.next()){
        var estudiante = new Estudiante();
        estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
        estudiante.setNombre(rs.getString("nombre"));
        estudiante.setApellido(rs.getString("apellido"));
        estudiante.setTelefono(rs.getString("telefono"));
        estudiante.setEmail(rs.getString("email"));
        //Falta agregarlo a la lista
        estudiantes.add(estudiante)
    }
}catch(Exception e){
    System.out.println("Ocurrió un error al seleccionar datos: "+e.getMessage());
}
finally{
    try {
        con.close();
    }catch (Exception e){
        System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
    }
}//Fin finally
return estudiantes;

    //Video 7
    //Método por id -> find by id
    public boolean buscarEstudiantePorId(Estudiante estudiante) {
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?"
        try {
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //Se encontro un registro
            } //Fin if
        } catch (Exception e) {
            System.out.println("Ocurrió un error al buscar el estudiante: " + e.getMessage());
        }
        finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            } //Fin catch
        } //Fin finally
        return false;
    }

    //Video 6
    public static void main(String[] args) {
        //Listar los estudiantes
        var estudianteDao = new EstudianteDAO();
        System.out.println("Listado de estudiantes");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println); //Función lambda para imprimir

        // Video 11 (Walter Moya)
        //Agregar estudiante
        var nuevoEstudiante = new Estudiante("Carlos","Lara","5494216165469","carlosl@mail.com");
        var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        if(agregado)
            System.out.println("Estudiante Agregado: "+nuevoEstudiante);
        else
            System.out.println("No se ha agregado estudiante: "+nuevoEstudiante);

        //Video 8
        //Buscar por id
//        var estudiante1 = new Estudiante (1);
//        System.out.println("Estudiantes antes de la busqueda: "+estudiante1);
//        var encontrado = estudianteDao.buscarEstudiantePorId (estudiante1);
//        if(encontrado)
//            System.out.println("Estudiante encontrado: "+estudiante1);
//        else
//            System.out.println("No se encontro el estudiante: "+estudiante1.getIdEstudiante());


    }

//Videos 9 y 10
//Metodo agregar un nuevo estudiante
public bolean agregarEstudiante(Estudiante estudiante){
    preparedStatement ps;
    Connection con = getConnection();
    String sql = "INSERT INTO estudiantes 2022 (nombre,apellido,telefono,email) VALUES(?,?,?,?)"
}
try{
    ps = con.preparedStatement(sql);
    ps.setString(1, estudiante.getNombre());
    ps.setString(2, estudiante.getApellido());
    ps.setString(3, estudiante.getTelefono());
    ps.setString(4, estudiante.geEmail());
    ps.execute();
    return true;
} catch(Exception e){
    System.out.println("Ocurrió un error al agregar estudiante: "+e.getMessage());
}//Fin catch
finally{
    try{
        con.close();
    }catch (Exception e){
        System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
    }
}//Fin finally
return false;
