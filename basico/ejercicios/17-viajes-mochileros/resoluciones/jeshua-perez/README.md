# Solucion - 17. Viajes mochileros

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_viajes_mochileros`, coleccion `viajes`.
- `fechaInicio` y `fechaFin` se guardan como `Date` nativo de Mongo para poder filtrar y ordenar cronologicamente, tal como pide el enfoque del ejercicio.
- `presupuesto` y `gastado` se guardan como dos campos numericos separados (en vez de un solo campo "balance") para poder comparar ambos con `$expr` y detectar viajes que se pasaron de presupuesto.
- No se referencia al viajero como coleccion aparte: en este ejercicio basta su nombre para agrupar y filtrar sus viajes.

## Archivos

- `seed.mongodb.js`: crea la coleccion `viajes` con 6 viajes de 4 mochileros distintos.
- `queries.mongodb.js`: filtros por fecha, comparacion de presupuesto vs gastado con `$expr`, un update y un reporte agregado.
- `evidencias.md`: resultados esperados de cada consulta.
