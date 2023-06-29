




//Videos 4 y 5
STRING sql = "SELECT * FROM estudiantes ORDER BY estudiantes2022";
try{
    ps = con.prepareStatement(sql);
    rs = ps.executeQuery();
    while(rs.next()){
        var estudiante = new Estudiante();
        estudiante.setIdEstudiante(rs.getInt("idestudiante2022"));
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