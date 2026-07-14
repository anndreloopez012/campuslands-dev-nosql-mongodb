# Solucion - 24. Ordenes de soldadura

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_ordenes_soldadura`, coleccion `ordenes`.
- `estadoInspeccion` es un campo controlado (`pendiente`, `aprobado`, `rechazado`) porque el enfoque del ejercicio es manejar el resultado de inspeccion de cada soldadura y sus transiciones (una pieza rechazada puede volver a `pendiente` tras corregirse).
- Documento plano por orden: `pieza`, `soldador` y `tipoJunta` son suficientes en este nivel, sin necesitar un catalogo de soldadores aparte.

## Archivos

- `seed.mongodb.js`: crea la coleccion `ordenes` con 6 ordenes de soldadura de 3 soldadores.
- `queries.mongodb.js`: filtros por estado de inspeccion, transiciones de estado con `updateOne` y un reporte agrupado.
- `evidencias.md`: resultados esperados de cada consulta.
