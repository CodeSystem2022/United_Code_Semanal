import psycopg2 # esto es para poder conectarnos a Postgrest

conexion = psycopg2.connect( #objeto
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd' #nombre en postgres
)

try:
    with conexion:
        with conexion.cursor() as cursor: #de esta manera no cerramos manualmente el cursor
            sentencia = 'DELETE FROM persona WHERE id_persona=%s'
            entrada = input('Digite el numero de registro a eliminar: ')
            valores = (entrada, ) #tuplas de valores
            cursor.execute(sentencia, valores) # de esta manera ejecutamos la sentencia
            #execute SOLO es p/ cuando ejecutamos 1 registro
            registros_eliminados = cursor.rowcount #insertados en cada columna
            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()