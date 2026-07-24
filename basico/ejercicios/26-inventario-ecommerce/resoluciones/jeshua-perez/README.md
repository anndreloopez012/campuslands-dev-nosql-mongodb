# Solucion - 26. Inventario ecommerce

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_inventario_ecommerce`, coleccion `productos`.
- `stock` y `stockMinimo` se guardan como campos numericos separados (no un solo booleano "bajoStock") para poder compararlos dinamicamente con `$expr` y generar alertas cuando el inventario cae por debajo del minimo, que es el enfoque del ejercicio.
- `categoria` distingue autos y motos dentro de la misma coleccion, evitando duplicar la logica de inventario en dos colecciones separadas.

## Archivos

- `seed.mongodb.js`: crea la coleccion `productos` con 6 productos de repuestos para autos y motos.
- `queries.mongodb.js`: alerta de stock bajo con `$expr`, filtros por categoria, updates de venta/reposicion y un reporte de valor de inventario.
- `evidencias.md`: resultados esperados de cada consulta.
