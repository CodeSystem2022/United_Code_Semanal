# Para conectarnos a Postgre
import psycopg2

conexion = psycopg2.connect(user='postgres', password='root', host='127.0.0.1', port='5432', database='test_bd')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona'
            cursor.execute(sentencia)  # De esta manera ejecutamos la sentencia
            registros = cursor.fetchall()  # Recuperamos todos los registros que seran una lista
            print(registros)

except Exception as e:
    print(f'Ocurrió un error: {e}')

finally:
    conexion.close()
    

# https://www.psycopg.org/docs/usage.html