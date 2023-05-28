import psycopg2  # esto es para poder conectar a postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mcanto@mail.com'),
                ('Marcelo', 'Cuenca', 'cuencaM@mail.com')

            )  # Es una tupla de tuplas
            cursor.executemany(sentencia, valores)  # De esta manera ejecutamos la sentencia
             # conexion.commit() esto se utiliza para guardar los cambios en la base de datos.
            registros_actualizados = cursor.rowcount
            print(f"Los registros actualizados son: {registros_actualizados}")

except Exception as e:
    print(f"Ocurrio un error {e}")
finally:
    conexion.close()