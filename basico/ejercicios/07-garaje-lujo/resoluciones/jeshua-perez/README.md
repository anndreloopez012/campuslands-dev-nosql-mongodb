# Solucion - 07. Garaje de autos de lujo

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_garaje_lujo`, coleccion `autos`.
- Documento plano por auto con campos numericos (`anio`, `precio`, `potenciaHP`) sin anidar, ya que el enfoque del ejercicio es practicar filtros numericos (`$gt`, `$gte`, `$lte`) directamente sobre esos campos.
- No se referencian catalogos de marcas: la marca se guarda como texto simple porque no requiere datos adicionales en este ejercicio.

## Archivos

- `seed.mongodb.js`: crea la coleccion `autos` con 6 vehiculos de distintas marcas, precios y potencias.
- `queries.mongodb.js`: filtros numericos con operadores de comparacion, una actualizacion de precio y un conteo.
- `evidencias.md`: resultados esperados de cada consulta.
