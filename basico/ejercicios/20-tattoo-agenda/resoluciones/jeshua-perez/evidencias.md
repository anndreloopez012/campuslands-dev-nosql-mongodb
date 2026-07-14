# Evidencias - 20. Agenda de tatuajes

## Ejecucion

1. `seed.mongodb.js` sobre `campus_tattoo_agenda`: `insertMany` reporta `insertedCount: 6` en `citas`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Citas pendientes: retorna 2 documentos (Erika Montano, Alejandro Nunez).
2. Agenda de Nadia Ferro ordenada por fecha: Rodrigo Salas (07-12), Wilson Bravo (07-15), Alejandro Nunez (07-16).
3. Citas entre el 14 y el 21 de julio: retorna 4 documentos (Wilson Bravo, Erika Montano, Alejandro Nunez, Valentina Cruz).
4. `updateOne` sobre Erika Montano: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "confirmada"`.
5. `updateOne` sobre Wilson Bravo: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "completada"`.
6. Reporte por estado (tras los updates): `pendiente: 1`, `confirmada: 2`, `completada: 2`, `cancelada: 1`.

## Conclusion

Un campo `estado` controlado junto con `Date` nativo permitio manejar el flujo completo de una cita (pendiente -> confirmada -> completada) y generar reportes agrupados por estado.
