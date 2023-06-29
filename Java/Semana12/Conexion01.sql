
-- Comenzamos con CRUD: create(insertar), read(leer), update(actualizar), delete(eliminar)
-- Listar los estudiantes (read)
SELECT * FROM estudiantes2023;
-- Insertar estudiante
INSERT INTO estudiantes2023 (nombre, apellido, telefono, email) VALUES ("Julian", "Alvarez", "2134567890", "julian_alv@mail.com");
-- Update (modificar)
UPDATE estudiantes2023 SET nombre="Enzo", apellido="Astrada" WHERE idestudiantes2023=1;
-- Delete(eliminar)


