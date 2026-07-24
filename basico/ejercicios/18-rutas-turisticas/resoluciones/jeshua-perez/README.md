# Solucion - 18. Rutas turisticas

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_rutas_turisticas`, coleccion `rutas`.
- `ubicacion` se modela como subdocumento GeoJSON `{ type: "Point", coordinates: [lng, lat] }`, el formato estandar que Mongo espera para indices y consultas geoespaciales (`2dsphere`, `$near`).
- Se embebe la ubicacion directamente en el documento de la ruta (no se referencia una coleccion de "ciudades") porque el enfoque del ejercicio es documentos geograficos simples, no un modelo de ciudades reutilizable.

## Archivos

- `seed.mongodb.js`: crea la coleccion `rutas` con 6 rutas turisticas y su punto GeoJSON.
- `queries.mongodb.js`: creacion de indice `2dsphere`, consulta `$near` por cercania, filtros por ciudad/dificultad/distancia y una actualizacion.
- `evidencias.md`: resultados esperados de cada consulta.
