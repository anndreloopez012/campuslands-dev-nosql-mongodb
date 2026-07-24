# Órdenes de soldadura

## Base de datos

`campus_ordenes_soldadura`

## Colección

- ordenes

## Decisiones de modelado

Se utilizó una única colección porque cada documento representa una orden de soldadura completa.

El estado de inspección se almacena directamente dentro de cada documento, ya que siempre forma parte de la consulta de la orden y no requiere compartirse con otros registros.

## Operaciones implementadas

- Inserción de 5 órdenes.
- Consultas por estado de inspección.
- Consultas por proceso de soldadura.
- Reporte ordenado por fecha.
- Actualización del estado de inspección.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`