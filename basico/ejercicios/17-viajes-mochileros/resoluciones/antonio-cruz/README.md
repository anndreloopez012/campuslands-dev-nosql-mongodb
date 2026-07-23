# Viajes mochileros

## Base de datos

`campus_viajes_mochileros`

## Colección

- viajes

## Decisiones de modelado

Se trabajó con una única colección porque cada documento representa un viaje completo y toda la información se consulta en conjunto.

Las fechas, el presupuesto, el transporte y el estado forman parte del mismo contexto del viaje, por lo que mantenerlos embebidos simplifica las consultas y evita referencias innecesarias.

## Operaciones implementadas

- Inserción de 5 viajes.
- Consultas por presupuesto.
- Consultas por estado.
- Consultas por duración.
- Reporte ordenado por presupuesto.
- Actualización del presupuesto de un viaje.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`