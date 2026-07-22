# Evidencias — Ejercicio 24 (juan-lema)

1. **find({})** → devuelve los 5 documentos sembrados (OS-1001 a OS-1005).

2. **find estado: "aprobada"** → OS-1001 (Mario Cux) y OS-1004 (Rudy Batz),
   solo con `codigo`, `cliente`, `soldador`.

3. **find proceso SMAW, espesorMm > 8** → OS-1001 (12mm) y OS-1003 (15mm).

4. **updateOne OS-1002** → `estado` pasa de "pendiente" a "aprobada" y el
   array `inspecciones` gana un elemento (antes vacio, ahora 1 registro con
   inspector "L. Pineda").

5. **deleteOne OS-1003** → el documento se elimina; la verificacion posterior
   con `find({ codigo: "OS-1003" })` devuelve arreglo vacio.

Total final en la coleccion tras las operaciones: 4 documentos.
