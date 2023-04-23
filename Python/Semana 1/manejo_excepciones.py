from NumerosIgualesException import NumerosIgualesException
resultado = None   #indica que la variable no tiene ningun valor
#a = 7
#b = 0
try:
    a = int(input("Digite el primer número: ")) #las variables tambien se pueden crear dentro del bloque
    b = int(input("Digite el segundo número: "))
    if a == b:
        raise NumerosIgualesException("Son números iguales") #RAISE nos permite arrojar una EXCEPCION
    resultado = a / b
except TypeError as e:
    print(f"TypeError - Ocurrió un error: {type (e)}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError - Ocurrió un error: {type (e)}")
except Exception as e: #renombramos la clase Exception
    print(f"Exception - Ocurrió un error:  {type (e)}") # es recomendable utilizar esta clase padre para que sea mas generic
    #la clase Exception debe ir siempre al final sino nunca va a ser preciso en el tipo de error
    #la clase padre siempre al final

#SOLO en el caso de que no se haya lanzado ninguna excepcion, es OPCIONAL este bloque
else:
    print("No se arrojó ninguna excepción")

finally: # SIEMPRE se va a ejecutar
    print("Ejecución de este bloque finally")

print(f"El resultado es: {resultado}")
print("Seguimos..")