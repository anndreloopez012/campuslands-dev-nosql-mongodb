# Solucion - 20. Agenda de tatuajes

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_tattoo_agenda`, coleccion `citas`.
- `estado` es un campo de texto controlado (`pendiente`, `confirmada`, `completada`, `cancelada`) y `fecha` es `Date` nativo, porque el enfoque del ejercicio es manejar el ciclo de vida de una cita a traves de estados y filtros por fecha/rango.
- Documento plano por cita: cliente y artista se guardan como texto simple, suficiente para agendar y filtrar en este nivel.

## Archivos

- `seed.mongodb.js`: crea la coleccion `citas` con 6 citas en distintos estados y fechas.
- `queries.mongodb.js`: filtros por estado y por rango de fechas, transiciones de estado con `updateOne` y un reporte agrupado por estado.
- `evidencias.md`: resultados esperados de cada consulta.
