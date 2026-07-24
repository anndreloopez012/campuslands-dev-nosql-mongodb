# Solucion - 06. Ordenes de taller de motos

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_taller_motos`, coleccion `ordenes`.
- Documento plano por orden de servicio, con `estado` como campo de texto controlado (`pendiente`, `en proceso`, `completado`) porque el enfoque del ejercicio es practicar updates basicos sobre ese campo.
- `fechaIngreso` se guarda como `Date` nativo de Mongo para permitir ordenar u filtrar por fecha en ejercicios futuros.

## Archivos

- `seed.mongodb.js`: crea la coleccion `ordenes` con 6 ordenes de taller en distintos estados.
- `queries.mongodb.js`: `updateOne` para cambios de estado individuales y `updateMany` con `$mul` para aplicar un descuento masivo.
- `evidencias.md`: resultados esperados de cada consulta.
