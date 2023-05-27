# Para conectarnos a Postgre
import psycopg2 as bd

conexion = bd.connect(user='postgres', password='root', host='127.0.0.1', port='5432', database='test_bd')

try:
    # conexion.autocommit = False # mala práctica, no debería estar
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Marta', 'Esparza', "mesparza@gmail.com")
    cursor.execute(sentencia, valores)
    conexion.commit()  # Hacemos el commit manualmente
    print('Termina la transacción')

except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error, se hizo un rollback: {e}')

finally:
    conexion.close()
