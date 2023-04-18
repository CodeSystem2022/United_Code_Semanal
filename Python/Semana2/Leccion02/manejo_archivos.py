# El método open puede arrojar alguna excepción
# se aconseja envolverlo en un bloque try except

#Declaramos una variable

try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # w por write, paraescribir información en el archivo. Agregamos el utf8 para los acentos
    # método open sirve para abrir un archivo existente y abrir un archivo inexistente

    #Escribimos el archivo
    archivo.write('Programamos con diferentes tipos de archivos, ahora en .txt\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('Como por ejemplo: acción, ejecución y producción\n')
    archivo.write('Agregamos otra línea\n')
    archivo.write('Con esto terminamos.')

except Exception as e:
    print(e) #nos imprime el error

finally: #se ejecuta siempre
    archivo.close() #se cierra siempre el archivo aunque haya existido algun error
