# Evidencias

## Inserción

Se ejecutó correctamente `seed.mongodb.js` y se registraron cinco reservas en la colección `reservas`.

## Consultas

Se verificó el funcionamiento de consultas para:

- Mostrar todas las reservas.
- Filtrar reservas confirmadas.
- Buscar eventos por deporte.
- Generar reporte ordenado por fecha.

## Eliminación controlada

Se eliminó únicamente la reserva de **María García** debido a que su estado era `cancelada`.

La consulta posterior confirmó que el documento fue eliminado correctamente sin afectar las demás reservas.