# modo read

archivo = open('prueba.txt', 'r', encoding='utf8')
# print(archivo.read())
# print(archivo.read(5))#Primeras letras
# print(archivo.read(15))#Continuamos contando desde la linea anterior
# print(archivo.readline())#Primera linea

# Anexar informacion a un archivo

'''archivo = open('prueba.txt', 'a', encoding='utf8')

#Crear archivos

archivo = open('prueba.txt', 'x', encoding='utf8')

#Para texto

archivo = open('prueba.txt', 't', encoding='utf8')

#Archivos binarios

archivo = open('prueba.txt', 'b', encoding='utf8')

#Para escribir y para leer informacion

archivo = open('prueba.txt', 'w+', encoding='utf8')

#Para leer y para escribir

archivo = open('prueba.txt', 'r+', encoding='utf8')'''

# vamos a iterar el archivo

# for linea in archivo:
# print(linea)
# print(archivo.readlines())#Lo muestra como una lista

# print(archivo.readlines()[1])#Muestra el elemento seleccionado

# anexar informacion en otro archivo

archivo2 = open('copia.txt', 'a', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print('Se ha terminado el proceso')
