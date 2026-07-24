# Solucion - 04. Heroes MOBA por rol

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_heroes_moba`, coleccion `heroes`.
- Documento plano por heroe: `rol`, `dificultad` y `disponibleRanked` son campos simples porque el ejercicio pide filtros simples, sin necesidad de subdocumentos ni arrays.
- No se referencian otras colecciones: el catalogo de heroes es autocontenido y cada filtro se resuelve con igualdad simple sobre un campo.

## Archivos

- `seed.mongodb.js`: crea la coleccion `heroes` con 6 documentos de distintos roles.
- `queries.mongodb.js`: filtros simples por `rol`, `disponibleRanked` y `dificultad`, mas una actualizacion y un conteo.
- `evidencias.md`: resultados esperados de cada consulta.
