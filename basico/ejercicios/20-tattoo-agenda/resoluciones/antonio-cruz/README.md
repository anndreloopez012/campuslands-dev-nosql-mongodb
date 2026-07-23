# Agenda de tatuajes

## Base de datos

`campus_tattoo_agenda`

## Colección

- citas

## Decisiones de modelado

Se utilizó una sola colección porque cada documento representa una cita completa.

Los datos del cliente, tatuador, fecha y estado permanecen en el mismo documento ya que normalmente se consultan juntos y no existe información compartida que justifique el uso de referencias.

## Operaciones implementadas

- Inserción de 5 citas.
- Consultas por estado.
- Consultas por tatuador.
- Consultas por rango de precio.
- Reporte ordenado por fecha.
- Actualización del estado de una cita.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`