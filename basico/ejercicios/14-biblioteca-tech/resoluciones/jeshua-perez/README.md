# Solucion - 14. Biblioteca tech

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_biblioteca_tech`, coleccion `libros`.
- Documento plano por libro: el enfoque del ejercicio es proyecciones limpias, por lo que el modelo evita anidamiento para que cada proyeccion (por inclusion o exclusion) sea directa.
- Se muestran ambas formas de proyectar: por inclusion (`{ titulo: 1, autor: 1, _id: 0 }`) y por exclusion (`{ paginas: 0 }`), sin mezclarlas en la misma consulta (Mongo no lo permite salvo con `_id`).

## Archivos

- `seed.mongodb.js`: crea la coleccion `libros` con 6 titulos de distintas categorias.
- `queries.mongodb.js`: proyecciones por inclusion y exclusion, filtro por autor con orden, un update y un `distinct`.
- `evidencias.md`: resultados esperados de cada consulta.
