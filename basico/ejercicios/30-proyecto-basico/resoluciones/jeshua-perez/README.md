# Solucion - 30. Proyecto basico MongoDB

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_proyecto_basico`, con dos colecciones: `jugadores` y `torneos`.
- Se usa **referencia manual** (`torneos.inscritos` es un array de `_id` de `jugadores`) en lugar de embeber la lista completa de jugadores dentro del torneo: un jugador puede inscribirse en varios torneos y sus datos (rango, estado) cambian de forma independiente al torneo, asi que embeber duplicaria y desactualizaria informacion.
- `_id` de `jugadores` se define manualmente (`"jug-1"`, `"jug-2"`, ...) para que la referencia en `torneos.inscritos` sea legible en los datos de ejemplo.
- Este ejercicio integra las cuatro operaciones CRUD sobre el mismo dominio: `insertOne` (alta de jugador e inscripcion), `find` (consultas simples y resolucion manual de referencias), `updateOne` (cambios de estado) y `deleteOne` (baja controlada con filtro especifico, nunca `{}`).

## Archivos

- `seed.mongodb.js`: crea `jugadores` y `torneos`, con inscripciones referenciadas por `_id`.
- `queries.mongodb.js`: recorrido completo Create -> Read -> Update -> Delete sobre ambas colecciones.
- `evidencias.md`: resultados esperados de cada operacion.
