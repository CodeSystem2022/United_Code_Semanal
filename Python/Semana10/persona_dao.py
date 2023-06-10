from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion


class PersonaDAO:
    """
    DAO significa :  data acces object
    crud significa
                    create = instertar
                    read = seleccionar
                    update = actualizar
                    delete = eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'IINSERT INTO persona(nombre, apellido, email) VALUES(%s,%s,%s)'
    _ACTUALIZAR  = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM personaWHERE id_persona=%s'

#video1    
# Definimos métodos de clase
    @classmethod
    def seleccionar(cls):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(registro[0],registro[1],registro[2],registro[3])
                    personas.append(persona)