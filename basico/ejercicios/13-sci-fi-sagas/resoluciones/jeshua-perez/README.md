# Solucion - 13. Sagas de ciencia ficcion

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_sci_fi_sagas`, con dos colecciones: `sagas` y `peliculas`.
- Se usa **referencia manual** (`peliculas.sagaId` -> `sagas._id`) en lugar de embeber: una saga puede tener varias peliculas y estas se consultan tambien de forma independiente (por titulo, por anio), asi que embeberlas dentro de la saga duplicaria informacion y complicaria las actualizaciones.
- `_id` de `sagas` se define manualmente como string legible (`"saga-horizonte"`) para que la referencia en `peliculas.sagaId` sea facil de leer en los datos de ejemplo.
- La resolucion de la referencia se hace manualmente con dos consultas (o con `$group`/`$lookup` en niveles superiores), tal como pide el enfoque "referencias manuales" del nivel basico.

## Archivos

- `seed.mongodb.js`: crea `sagas` y `peliculas`, enlazadas por `sagaId`.
- `queries.mongodb.js`: consultas por referencia, resolucion manual de la referencia y conteo de peliculas por saga.
- `evidencias.md`: resultados esperados de cada consulta.
