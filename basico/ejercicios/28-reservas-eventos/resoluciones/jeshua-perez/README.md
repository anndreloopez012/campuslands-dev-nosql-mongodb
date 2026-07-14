# Solucion - 28. Reservas de eventos campus

Autor: jeshua-perez

## Decisiones de modelado

- Base de datos: `campus_reservas_eventos`, coleccion `reservas`.
- `estado` (`confirmada`, `cancelada`) es el campo clave del ejercicio: el enfoque es "delete controlado", por lo que ninguna consulta de borrado usa `{}` como filtro; siempre se combina `estado: "cancelada"` con otra condicion (nombre del evento o fecha) antes de eliminar.
- Se separan dos pasos de eliminacion (`deleteOne` puntual y `deleteMany` con filtro compuesto) para mostrar criterio: primero se verifica con `find` que solo se seleccionan las reservas correctas, y solo despues se borra.

## Archivos

- `seed.mongodb.js`: crea la coleccion `reservas` con 6 eventos deportivos, 2 de ellos cancelados.
- `queries.mongodb.js`: verificacion previa con `find`, `deleteOne`/`deleteMany` con filtros controlados y verificacion posterior.
- `evidencias.md`: resultados esperados de cada consulta.
