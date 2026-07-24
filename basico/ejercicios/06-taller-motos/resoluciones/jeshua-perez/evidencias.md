# Evidencias - 06. Ordenes de taller de motos

## Ejecucion

1. `seed.mongodb.js` sobre `campus_taller_motos`: `insertMany` reporta `insertedCount: 6` en `ordenes`.
2. `queries.mongodb.js` ejecutado sobre la misma base, en orden.

## Resultados por consulta

1. Ordenes pendientes iniciales: 3 documentos (Oscar Delgado, Tomas Bermudez, Diana Salazar).
2. `updateOne` sobre Oscar Delgado: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "en proceso"`.
3. `updateOne` sobre Marcela Nino: `matchedCount: 1`, `modifiedCount: 1`; pasa a `estado: "completado"`.
4. `updateMany` sobre pendientes (Tomas Bermudez, Diana Salazar tras el paso 2): `matchedCount: 2`, `modifiedCount: 2`; sus costos bajan un 10%.
5. Ordenes completadas: Paula Ortiz y Marcela Nino.
6. `countDocuments({ estado: "en proceso" })`: retorna `2` (Oscar Delgado, Julian Reyes).

## Conclusion

`updateOne` con `$set` cubrio los cambios de estado individuales y `updateMany` con `$mul` permitio aplicar un ajuste de costo a varias ordenes pendientes en una sola operacion.
