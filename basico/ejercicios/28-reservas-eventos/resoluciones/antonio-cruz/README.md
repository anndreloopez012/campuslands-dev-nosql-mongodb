# Reservas de eventos campus

## Base de datos

`campus_reservas_eventos`

## Colección

- reservas

## Decisiones de modelado

Se creó una colección llamada `reservas`, donde cada documento representa una reserva de un evento deportivo.

La información del evento, participante y estado se mantiene dentro del mismo documento porque son datos que se consultan juntos y no existe información compartida que requiera referencias.

## Operaciones implementadas

- Inserción de 5 reservas.
- Consulta de reservas confirmadas.
- Consulta por deporte.
- Reporte ordenado por fecha.
- Eliminación controlada de una reserva cancelada.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`