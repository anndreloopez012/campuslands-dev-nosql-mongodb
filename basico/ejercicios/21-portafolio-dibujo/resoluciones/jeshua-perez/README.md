# Solucion - 21. Portafolio de dibujo

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_portafolio_dibujo`, coleccion `dibujos`.
- `tags` se modela como array de strings embebido, porque el enfoque del ejercicio es busqueda por tags (`$all`, coincidencia simple) directamente sobre el documento de la obra.
- `publicado` es booleano para distinguir el portafolio publico del material en borrador, sin necesitar una coleccion separada de "borradores".

## Archivos

- `seed.mongodb.js`: crea la coleccion `dibujos` con 6 obras de 3 artistas y sus tags.
- `queries.mongodb.js`: busquedas por tag simple y combinado, filtro por artista/tecnica, y actualizaciones sobre `publicado` y `tags`.
- `evidencias.md`: resultados esperados de cada consulta.
