class PersonaDAO:
    """
    DAO significa: DATA Access Object
    CRUD significa:
                    Create ---> Insertar
                    Read ---> Seleccionar
                    Update ---> Actualizar
                    Delete ---> Elminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT TO persona(nombre, apellido, email) VALUES (%s,%s,%s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'
