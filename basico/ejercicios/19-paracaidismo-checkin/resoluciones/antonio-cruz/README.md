# Check-in de paracaidismo

## Base de datos

`campus_paracaidismo_checkin`

## Colección

- checkins

## Decisiones de modelado

Se trabajó con una única colección porque cada documento representa un proceso completo de check-in.

Las validaciones manuales se almacenan mediante campos booleanos, permitiendo identificar rápidamente si el participante cumple con los requisitos antes del salto.

No fue necesario utilizar referencias ya que toda la información pertenece exclusivamente al registro del participante.

## Operaciones implementadas

- Inserción de 5 registros.
- Consultas por autorización y validaciones.
- Reporte ordenado por edad.
- Actualización del estado de autorización de un participante.

## Archivos

- `seed.mongodb.js`
- `queries.mongodb.js`
- `evidencias.md`