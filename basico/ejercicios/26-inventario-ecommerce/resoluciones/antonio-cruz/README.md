# Inventario ecommerce

## Base de datos

`campus_inventario_ecommerce`

## Colección

- productos

## Decisiones de modelado

Se utilizó una colección principal llamada `productos`, donde cada documento representa un artículo del inventario.

La información de stock y stock mínimo permanece dentro del mismo documento porque se consulta frecuentemente para detectar productos con bajo inventario y generar alertas.

No se utilizaron referencias porque los datos relacionados no son compartidos entre múltiples documentos dentro del alcance del ejercicio.

## Operaciones implementadas

- Inserción de 5 productos.
- Consulta de inventario disponible.
- Consulta de alertas por bajo stock.
- Filtrado por categoría.
- Reporte ordenado por precio.
- Actualización de inventario.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`