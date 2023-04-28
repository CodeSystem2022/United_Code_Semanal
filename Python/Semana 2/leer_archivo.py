
archivo = open('prueba.txt', 'r', encoding='UTF8') #las letas son: w (write), r (read), a (anexa, append), x (crear)
#print(archivo.read())
#print(archivo.read(6))
#print(archivo.readline()) #lee la primer linea
#print(archivo.readline()) # salta a la sieguiente linea

#vamos a iterar el archivo, cada una de las lineas

#for linea in archivo:
    #print(linea)
#print(archivo.readlines()) # muestra como una lista
#print(archivo.readlines(1)) # muestra como una lista
#print(archivo.readlines()[1]) # muestra como una lista

# anexamos informacion, copiamos a otro
archivo2 = open('copia.txt', 'a',encoding='utf8')
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print('Se ha terminado el proceso de leer y copiar archivos')


