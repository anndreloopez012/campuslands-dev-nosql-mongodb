# Evidencias - 14. Biblioteca tech

## Ejecucion

1. `seed.mongodb.js` sobre `campus_biblioteca_tech`: `insertMany` reporta `insertedCount: 6` en `libros`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Catalogo limpio: retorna los 6 libros con solo `titulo` y `autor`.
2. Disponibles: retorna 4 documentos (antes del update) con `titulo` y `categoria`.
3. Proyeccion por exclusion de `paginas`: retorna los 6 libros con todos los campos menos `paginas`.
4. Libros de Sofia Delgado ordenados por anio: "Arquitectura de Microservicios" (2023), "Introduccion a MongoDB" (2024).
5. `updateOne` sobre "Redes y Seguridad Basica": `matchedCount: 1`, `modifiedCount: 1`; queda `disponible: true`.
6. `distinct("categoria")`: retorna `["Software", "Bases de datos", "Redes", "Cloud"]`.

## Conclusion

Las proyecciones por inclusion y exclusion permitieron generar distintas "vistas" del catalogo (listado publico, ficha completa sin paginas) sin duplicar la coleccion.
