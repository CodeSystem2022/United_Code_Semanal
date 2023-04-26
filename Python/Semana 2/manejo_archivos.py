# declaramos una variable
try:
    archivo = open("prueba.txt", "w", encoding="utf8")  # si este archivo no existe, lo crea// w viene de write
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("Los acentos son importantes para las palabras\n")
    archivo.write("como por ejemplo: acción, ejecución y producción\n")
    archivo.write("las letras son:\n r--> read leer, \n a--> append anexa, \n w--> write escribir, \n x --> crea un archivo")
    archivo.write("\ t --> es para texto o text, \n b --> archivos binarios, \n w+ --> lee y escribe son iguales r+ \n")
    archivo.write("Con esto terminamos")
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo
# archivo.write("probando"): este es un error