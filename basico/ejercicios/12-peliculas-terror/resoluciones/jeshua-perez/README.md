# Solucion - 12. Catalogo de peliculas de miedo

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_peliculas_terror`, coleccion `peliculas`.
- Documento plano por pelicula con `rating` numerico y `titulo` de texto, ya que el enfoque del ejercicio es combinar filtros por texto (`$text`, `$regex`) con filtros por rating (`$gte`).
- Se crea un indice de texto sobre `titulo` para soportar `$text search`; se complementa con `$regex` para busquedas parciales rapidas sin depender del indice.

## Archivos

- `seed.mongodb.js`: crea la coleccion `peliculas` con 6 titulos de distintos subgeneros.
- `queries.mongodb.js`: creacion de indice de texto, busqueda por texto, filtros por rating y regex, y una actualizacion.
- `evidencias.md`: resultados esperados de cada consulta.
