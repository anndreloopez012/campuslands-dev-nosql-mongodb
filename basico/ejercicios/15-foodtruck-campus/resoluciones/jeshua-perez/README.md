# Solucion - 15. Pedidos foodtruck

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_foodtruck_campus`, coleccion `pedidos`.
- `items` se modela como array simple de strings embebido: cada pedido tiene pocos items y siempre se leen junto con el pedido, sin necesitar un catalogo de menu separado en este ejercicio.
- `estado` es un campo controlado (`recibido`, `en preparacion`, `entregado`) porque el enfoque del ejercicio es practicar `insertOne` para nuevos pedidos y `updateOne` para avanzar su estado.

## Archivos

- `seed.mongodb.js`: crea la coleccion `pedidos` con 5 pedidos en distintos estados.
- `queries.mongodb.js`: `insertOne` de un pedido nuevo, `updateOne` para avanzar estados y un reporte de ventas con aggregation basica.
- `evidencias.md`: resultados esperados de cada consulta.
