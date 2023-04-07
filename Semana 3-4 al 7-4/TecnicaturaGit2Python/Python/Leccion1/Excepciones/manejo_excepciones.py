# Evento que ocurre durante la ejecución del programa. Tratando a las excepciones de esta forma, no se detiene toda la ejecución
from NumerosIgualesException import NumerosIgualesException
resultado = None


try:
    a = 10#Ahora las variables son locales (dentro del try)
    b = 10
    if a == b:
        raise NumerosIgualesException("Los numeros son iguales")#Llamamos a la clase
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:#No se puede procesar excepciones de mayor jerarquía, por eso lo hacemos generico. La clase padre siempre al final
    print(f'Exception - Ocurrio un error: {type(e)}')
else:
    print("Ninguna excepcion")
finally:
    print("Ejecucion de este bloque final. Se ejecuta siempre")

print(f'El resultado es: {resultado}')  # La variable no cambia su valor cuando le introduzco algo con un error
print('seguimos...')
