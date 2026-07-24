# Drop de ropa urbana

## Base de datos

`campus_ropa_drop`

## Colección

- prendas

## Decisiones de modelado

Se utilizó una sola colección porque el ejercicio es pequeño y cada documento representa una prenda completa.

Las tallas se almacenan como un arreglo (`tallas`) debido a que forman parte del mismo producto y normalmente se consultan junto con él. Esto evita consultas adicionales y mantiene el modelo simple.

No fue necesario usar referencias porque ninguna información es compartida entre múltiples documentos.

## Operaciones implementadas

- Insert de 5 documentos.
- Consultas con filtros.
- Consulta sobre arrays de tallas.
- Reporte ordenado por precio.
- Actualización de stock y disponibilidad.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`