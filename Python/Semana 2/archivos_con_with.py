# with => abre el archivo y cierra de manera automática
# No hace falta el try catch ni el finally
# Utiliza diferentes métodos: __enter__ este es el que abre y __exit__ el que cierra
# sintaxis simplificada
"""
with open('prueba.txt', 'r', encoding='utf8') as archivo:
    print(archivo.read())

"""
from manejoArchivos2 import ManejoArchivos

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())