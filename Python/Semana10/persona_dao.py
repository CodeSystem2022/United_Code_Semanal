from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion
from logger_base import log


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
                return personas

    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f"Persona Actualizada: {persona}")
                return cursor.rowcount
                    
if __name__ == '__main__':

    # Actualizar un registro
    # persona1 = Persona(1, 'juan Jose', 'Pena', 'jjpena@mail.com')
    # personas_actualizadas = PersonaDAO.actualizar(persona1)
    # log.debug(f"Personas Actualizadas: {personas_actualizadas}")

    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
        